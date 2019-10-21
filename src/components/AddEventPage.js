import React from 'react';
import EventForm from './EventForm'
import {connect} from 'react-redux';
import {startAddEvent} from '../actions/events'

export const AddEventPage = ({addEvent, history, loading}) => (
    <div>
        <div>
        {loading && <div className="spinner"></div>}
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
const mapStateToProps = (state) => ({
    loading: state.auth.loading
})
export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);