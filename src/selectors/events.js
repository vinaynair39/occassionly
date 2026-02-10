import FilterEngine from '../services/FilterEngine';

const filterEngine = new FilterEngine();

const matchesText = (event, text) => {
  if (!text) return true;
  const query = text.toLowerCase();
  const title = (event.title || '').toLowerCase();
  const short = (event.shortDescription || '').toLowerCase();
  const long = (event.longDescription || '').toLowerCase();
  return title.includes(query) || short.includes(query) || long.includes(query);
};

const selectEvents = (events, { text, category, costType, timeRange }) => {
  const filtered = filterEngine.filter(events, { category, costType, timeRange });
  return filtered
    .filter((event) => matchesText(event, text))
    .sort(
      (a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime()
    );
};

export default selectEvents;
