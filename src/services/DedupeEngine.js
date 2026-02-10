class DedupeEngine {
  buildKey(event) {
    const start = new Date(event.start || event.startDateTime).toISOString();
    return `${event.title || event.id}-${start}`.toLowerCase();
  }

  dedupe(events) {
    const seen = new Map();
    events.forEach((event) => {
      const key = this.buildKey(event);
      if (!seen.has(key)) {
        seen.set(key, event);
      }
    });
    return Array.from(seen.values());
  }
}

export default DedupeEngine;
