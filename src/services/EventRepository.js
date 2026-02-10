class EventRepository {
  constructor() {
    this.events = [];
  }

  replaceAll(events) {
    this.events = [...events];
  }

  list() {
    return [...this.events];
  }

  findById(id) {
    return this.events.find((event) => event.id === id);
  }
}

export default EventRepository;
