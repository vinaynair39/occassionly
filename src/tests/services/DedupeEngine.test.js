import DedupeEngine from '../../services/DedupeEngine';

const engine = new DedupeEngine();

const baseEvent = {
  id: '1',
  title: 'Sample',
  start: '2024-01-01T10:00:00Z'
};

test('dedupe removes events with same id and start time', () => {
  const events = [
    baseEvent,
    { ...baseEvent, id: '99', title: 'Sample', start: '2024-01-01T10:00:00Z' },
    { ...baseEvent, id: '2', start: '2024-01-01T11:00:00Z' }
  ];

  const result = engine.dedupe(events);
  expect(result).toHaveLength(2);
});
