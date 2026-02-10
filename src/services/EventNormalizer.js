import HtmlSanitizer from '../utils/HtmlSanitizer';
import UrlValidator from '../utils/UrlValidator';

class EventNormalizer {
  constructor() {
    this.sanitizer = new HtmlSanitizer();
    this.urlValidator = new UrlValidator();
  }

  normalize(raw) {
    const start = raw.startDateTime || raw.start || raw.start_time;
    const end = raw.endDateTime || raw.end || raw.end_time || start;
    const description = this.sanitizer.sanitize(raw.longDescription || raw.description || '');
    const safeUrl = this.urlValidator.ensureSafe(raw.sourceUrl || raw.url || '');

    const normalized = {
      id: String(raw.id || raw.slug || raw.title),
      title: raw.title || 'Untitled event',
      start: new Date(start).toISOString(),
      end: new Date(end).toISOString(),
      location: raw.location || 'TBD',
      organizer: raw.organizer || raw.org || 'Unknown',
      category: raw.category || 'General',
      description,
      url: safeUrl,
      tags: raw.tags || [],
      costType: raw.costType || raw.cost || 'Free'
    };

    // aliases for existing UI
    normalized.startDateTime = normalized.start;
    normalized.endDateTime = normalized.end;
    normalized.longDescription = description;
    normalized.shortDescription = raw.shortDescription || description.substring(0, 140);
    normalized.sourceUrl = safeUrl;

    return normalized;
  }
}

export default EventNormalizer;
