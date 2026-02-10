const formatDateForCalendar = (dateString) => {
  const date = new Date(dateString);
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}Z$/, 'Z');
};

export const buildICSFile = (event) => {
  const start = formatDateForCalendar(event.startDateTime);
  const end = formatDateForCalendar(event.endDateTime);
  const uid = `${event.id}@campusflow`;
  return `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CampusFlow//EN\nBEGIN:VEVENT\nUID:${uid}\nSUMMARY:${event.title}\nDESCRIPTION:${event.longDescription}\nLOCATION:${event.location}\nDTSTART:${start}\nDTEND:${end}\nEND:VEVENT\nEND:VCALENDAR`;
};

export const buildGoogleCalendarUrl = (event) => {
  const start = formatDateForCalendar(event.startDateTime);
  const end = formatDateForCalendar(event.endDateTime);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.longDescription,
    location: event.location,
    dates: `${start}/${end}`
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export default { buildICSFile, buildGoogleCalendarUrl };
