import React from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem';
import selectEvents from '../selectors/events';

export const EventList = (props) => (
  <div className="list" aria-live="polite">
    {props.events.length === 0 ? (
      <p>No events match your search yet. Try adjusting your filters.</p>
    ) : (
      props.events.map((event) => <EventListItem key={event.id} {...event} />)
    )}
  </div>
);
const mapStateToProps = (state) => ({
  events: selectEvents(state.events, state.filters)
});

export default connect(mapStateToProps)(EventList);