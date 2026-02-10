const blockedTags = ['script', 'style', 'iframe'];

class HtmlSanitizer {
  sanitize(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    blockedTags.forEach((tag) => {
      const elements = temp.querySelectorAll(tag);
      elements.forEach((el) => el.remove());
    });
    temp.querySelectorAll('*').forEach((el) => {
      [...el.attributes].forEach((attr) => {
        if (attr.name.toLowerCase().startsWith('on')) {
          el.removeAttribute(attr.name);
        }
      });
    });
    return temp.textContent || temp.innerText || '';
  }
}

export default HtmlSanitizer;
