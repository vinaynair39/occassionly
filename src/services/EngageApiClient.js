import events from '../data/events';

class EngageApiClient {
  async fetchEvents() {
    try {
      return events;
    } catch (error) {
      console.error('Failed to fetch events', error);
      return [];
    }
  }
}

export default EngageApiClient;
