import sanitizeHtml from 'sanitize-html';

export const sanitizeContent = (dirty: string) =>
  sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h2', 'h3']),
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src', 'alt']
    }
  });
