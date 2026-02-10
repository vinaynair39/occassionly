import EventNormalizer from '../../services/EventNormalizer';

describe('EventNormalizer', () => {
  let normalizer;

  beforeEach(() => {
    normalizer = new EventNormalizer();
  });

  test('maps raw event fields into canonical event', () => {
    const raw = {
      id: 10,
      title: 'Hello',
      startDateTime: '2024-01-01T10:00:00Z',
      endDateTime: '2024-01-01T11:00:00Z',
      longDescription: 'Details',
      location: 'Library'
    };
    const event = normalizer.normalize(raw);
    expect(event.id).toBe('10');
    expect(event.start).toBe('2024-01-01T10:00:00.000Z');
    expect(event.startDateTime).toBeDefined();
    expect(event.location).toBe('Library');
  });

  test('sanitizes html descriptions', () => {
    const raw = {
      id: 'x',
      title: 'Injected',
      startDateTime: '2024-01-01T10:00:00Z',
      longDescription: '<script>alert(1)</script>Safe'
    };
    const event = normalizer.normalize(raw);
    expect(event.description).toBe('Safe');
  });
});
