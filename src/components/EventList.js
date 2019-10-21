import React from 'react';
import {connect} from 'react-redux';
import EventListItem from './EventListItem';
import selectEvents from '../selectors/events'

export const EventList = (props) => (
    <div className="list">
        {props.events.length === 0 ? (<p>No blogs</p>) : (props.events.map((event) => {
            return <EventListItem key={event.id}  {...event} />
        }))}
        
    </div>
)
const mapStateToProps = (state) => ({
    events: selectEvents(state.events, state.filters),
    // userImage: state.user.user ? state.auth.user.imageUrl: ''
});

export default connect(mapStateToProps)(EventList);