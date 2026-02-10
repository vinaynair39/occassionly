import EngageApiClient from './EngageApiClient';
import EventNormalizer from './EventNormalizer';
import DedupeEngine from './DedupeEngine';
import EventRepository from './EventRepository';
import SearchIndex from './SearchIndex';
import FilterEngine from './FilterEngine';

// EventService orchestrates ingest -> normalize -> dedupe -> repository
class EventService {
  constructor() {
    this.client = new EngageApiClient();
    this.normalizer = new EventNormalizer();
    this.dedupeEngine = new DedupeEngine();
    this.repository = new EventRepository();
    this.searchIndex = new SearchIndex();
    this.filterEngine = new FilterEngine();
    this.loaded = false;
  }

  async loadEvents() {
    if (this.loaded) {
      return this.repository.list();
    }

    const rawEvents = await this.client.fetchEvents();
    const normalized = rawEvents.map((event) => this.normalizer.normalize(event));
    const deduped = this.dedupeEngine.dedupe(normalized);
    this.repository.replaceAll(deduped);
    this.searchIndex.buildIndex(deduped);
    this.loaded = true;
    return deduped;
  }

  async getAllEvents() {
    await this.loadEvents();
    return this.repository.list();
  }

  async getEventsForToday() {
    const events = await this.getAllEvents();
    return this.filterEngine.filter(events, { timeRange: 'today' });
  }

  async getEventsForThisWeek() {
    const events = await this.getAllEvents();
    return this.filterEngine.filter(events, { timeRange: 'week' });
  }

  async search(queryString = '') {
    await this.getAllEvents();
    return this.searchIndex.search(queryString);
  }

  async filter(filters = {}) {
    const events = await this.getAllEvents();
    return this.filterEngine.filter(events, filters);
  }

  async getById(id) {
    await this.getAllEvents();
    return this.repository.findById(id);
  }
}

const service = new EventService();

export const getAllEvents = () => service.getAllEvents();
export const getEventsForToday = () => service.getEventsForToday();
export const getEventsForThisWeek = () => service.getEventsForThisWeek();
export const searchEvents = (query) => service.search(query);
export const filterEvents = (filters) => service.filter(filters);
export const getEventById = (id) => service.getById(id);
export default service;
