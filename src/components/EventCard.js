import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildICSFile, buildGoogleCalendarUrl } from '../utils/calendar';
import FocusManager from '../utils/FocusManager';

const formatDateTime = (value) =>
  new Date(value).toLocaleString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });

const focusManager = new FocusManager();

export const EventCard = ({ event }) => {
  // Hook must always be called; we guard inside it
  useEffect(() => {
    if (!event) return;
    focusManager.trap('#event-title');
    return () => focusManager.restore();
  }, [event]);

  if (!event) {
    return (
      <div className="content-container event-card">
        <h2>Event not found</h2>
        <Link to="/">Back to events</Link>
      </div>
    );
  }

  const icsContent = buildICSFile(event);
  const googleCalendarUrl = buildGoogleCalendarUrl(event);

  const downloadIcs = () => {
    const element = document.createElement('a');
    const file = new Blob([icsContent], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = `${event.title}.ics`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="content-container event-card">
      <Link to="/" className="back-link">← Back to all events</Link>
      <h2 className="event-card__title" id="event-title" tabIndex="-1">
        {event.title}
      </h2>
      <div className="event-card__description">
        <p>{event.longDescription || event.shortDescription}</p>
      </div>
      <div className="event-card__others">
        <div>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
          </p>
          <p>Organizer: {event.organizer}</p>
          <p>Category: {event.category}</p>
          <p>Cost: {event.costType}</p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            {formatDateTime(event.startDateTime)}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> Ends{' '}
            {formatDateTime(event.endDateTime)}
          </p>
        </div>
      </div>
      <div className="event-card__register">
        <button className="btn-primary" onClick={downloadIcs}>
          <FontAwesomeIcon icon={faDownload} /> Download .ics
        </button>
        <a
          className="btn-secondary"
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Google Calendar <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
        <a
          className="btn-secondary"
          href={event.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.title,
            startDate: event.startDateTime,
            endDate: event.endDateTime,
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            location: {
              '@type': 'Place',
              name: event.location
            },
            organizer: {
              '@type': 'Organization',
              name: event.organizer
            },
            description: event.longDescription
          })
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  event: state.events.find((event) => event.id === props.match.params.id)
});

export default connect(mapStateToProps)(EventCard);
