import React from 'react';

const A11yAnnouncer = ({ message }) => (
  <div aria-live="polite" className="visually-hidden" role="status">{message}</div>
);

export default A11yAnnouncer;
