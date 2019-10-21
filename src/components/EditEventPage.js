import React, {useState} from 'react';
import EventForm from './EventForm'
import {connect} from 'react-redux';
import {startEditEvent} from '../actions/events'
import {startRemoveEvent} from '../actions/events';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditEventPage= (props) => {


    const onSubmit = (update) => {
        props.editEvent(props.event.id, update);
        
    }
    const removeEvent = () => {
        if(window.confirm('Are you sure you want to delete this event?'))
            props.removeEvent(props.event.id);
    }
    return(
        <div>
            {props.loading && <div className="spinner"></div>}
            <button onClick={removeEvent} className="button button-remove"><FontAwesomeIcon icon={faTrashAlt}/> Remove</button>
            <EventForm onSubmit={onSubmit}
            event={props.event}/>
        </div>
    )
}



const mapStateToProps = (state, props) => {
    return {
        event: state.events.find((event) => event.id === props.match.params.id),
        loading: state.auth.loading

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        editEvent: (id,event) => dispatch(startEditEvent(id ,event)),
        removeEvent: (id) => dispatch(startRemoveEvent(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);