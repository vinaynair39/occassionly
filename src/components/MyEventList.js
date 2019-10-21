import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import EventListItem from './EventListItem';
import {startGetUserEvents} from '../actions/user';


export const MyEventList = (props) => {
    useEffect(() => {   
        console.log(props.handle || props.userHandle)
        props.getUserEvents(props.handle || props.userHandle)
    },[])
    return (
        <>
             {props.events.length === 0 ? (<p>no events..</p>) : (props.events.map((event) => {
                return <EventListItem key={event.id} {...event} />
            }))}
        </>
    )
}

const mapStateToProps = (state) => ({
    userHandle: state.user.userHandle,
    events: state.user.userEvents ? state.user.userEvents : []
});
const mapDispatchToProps = (dispatch) => ({
    getUserEvents: (userHandle) => dispatch(startGetUserEvents(userHandle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEventList);