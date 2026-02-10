class SearchIndex {
  constructor() {
    this.events = [];
  }

  buildIndex(events) {
    this.events = events;
  }

  search(queryString = '') {
    const query = queryString.trim().toLowerCase();
    if (!query) return this.events;
    return this.events.filter((event) => {
      const haystack = `${event.title} ${event.description} ${event.organizer} ${
        (event.tags || []).join(' ')
      }`.toLowerCase();
      return haystack.includes(query);
    });
  }
}

export default SearchIndex;
