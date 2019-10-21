export default (events, { text, sortBy }) => {
    return events.filter((event) => {
      const textMatch = event.eventName.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    }).sort((a, b) => {
      if (sortBy === 'likes') {
        return a.likes < b.likes ? 1 : -1;
      }
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
  
  };