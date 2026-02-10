class FilterEngine {
  filter(events, { category, costType, organizer, location, timeRange } = {}) {
    if (!Array.isArray(events)) return [];
    return events.filter((event) => {
      const categoryMatch = !category || category === 'All' || event.category === category;
      const costMatch = !costType || costType === 'All' || event.costType === costType;
      const organizerMatch = !organizer || event.organizer === organizer;
      const locationMatch = !location || event.location === location;
      const timeMatch = this.matchesTime(event, timeRange);
      return categoryMatch && costMatch && organizerMatch && locationMatch && timeMatch;
    });
  }

  matchesTime(event, timeRange) {
    if (!timeRange || timeRange === 'all') return true;
    const start = new Date(event.start || event.startDateTime);
    const now = new Date();
    if (timeRange === 'today') {
      return (
        start.getFullYear() === now.getFullYear() &&
        start.getMonth() === now.getMonth() &&
        start.getDate() === now.getDate()
      );
    }
    if (timeRange === 'week') {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 7);
      return start >= startOfWeek && start < endOfWeek;
    }
    return true;
  }
}

export default FilterEngine;
