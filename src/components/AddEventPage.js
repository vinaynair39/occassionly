import React from 'react';
import EventForm from './EventForm'
import {connect} from 'react-redux';
import {startAddEvent} from '../actions/events'

export const AddEventPage = ({addEvent, history}) => (
    <div>
        <div>
        <EventForm onSubmit = {(event) => {
            addEvent(event);
            console.log(event.get('image'));
            history.push('/');
            }}/>
        </div>
       
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return{
        addEvent: (event) => dispatch(startAddEvent(event))
    }
}
export default connect(undefined, mapDispatchToProps)(AddEventPage);