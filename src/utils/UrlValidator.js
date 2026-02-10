class UrlValidator {
  ensureSafe(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url, window.location.origin);
      if (['http:', 'https:'].includes(parsed.protocol)) {
        return parsed.toString();
      }
    } catch (e) {
      return '';
    }
    return '';
  }
}

export default UrlValidator;
