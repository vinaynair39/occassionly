import React from 'react';
import {connect} from 'react-redux';
import EventListItem from './EventListItem';
// import selectBlogs from '../selectors/blogs'

export const EventList = (props) => (
    <div className="list">
        {props.events.length === 0 ? (<p>No blogs</p>) : (props.events.map((event) => {
            return <EventListItem key={event.id}  {...event} />
        }))}
    </div>
)
const mapStateToProps = (state) => ({
    events: state.events,
    // userImage: state.auth.user ? state.auth.user.imageUrl: ''
});

export default connect(mapStateToProps)(EventList);