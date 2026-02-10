import FilterEngine from '../../services/FilterEngine';

const events = [
  {
    id: '1',
    title: 'Today event',
    category: 'Social',
    costType: 'Free',
    start: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Future event',
    category: 'Career',
    costType: 'Paid',
    start: (() => {
      const now = new Date();
      now.setDate(now.getDate() + 4);
      return now.toISOString();
    })()
  }
];

test('filters by category and time', () => {
  const engine = new FilterEngine();
  const result = engine.filter(events, { category: 'Social', timeRange: 'today' });
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe('1');
});
