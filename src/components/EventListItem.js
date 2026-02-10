import React from 'react';
import { Link } from 'react-router-dom';
import { faCalendarAlt, faClock, faArrowRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
};

const formatEnd = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const sameDay = startDate.toDateString() === endDate.toDateString();
  return sameDay
    ? endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    : formatDate(end);
};

export const EventListItem = ({ id, title, startDateTime, endDateTime, location, category, costType, shortDescription }) => (
  <div className="list-card">
    <div className="list-card__body">
      <div className="list-card__content">
        <Link className="list-card__body-title" to={`/event/${id}`}>
          {title}
        </Link>
        <p className="list-card__content-text">{shortDescription}</p>
        <p className="list-card__meta">Category: {category} · {costType}</p>
      </div>
      <div className="list-card__body-date">
        <div><h6><FontAwesomeIcon icon={faClock}/> {formatDate(startDateTime)} - {formatEnd(startDateTime, endDateTime)}</h6></div>
        <div>
          <h6><FontAwesomeIcon icon={faCalendarAlt} /> {new Date(startDateTime).toLocaleDateString()}</h6>
          <h6><FontAwesomeIcon icon={faMapMarkerAlt}/> {location}</h6>
        </div>
      </div>
    </div>

    <div className="list-card__fab">
      <Link to={`/event/${id}`} aria-label={`View details for ${title}`}>
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#eb6e80"/>
      </Link>
    </div>
  </div>
);

export default EventListItem;