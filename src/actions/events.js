import axios from 'axios';

export const setEvents = (events) => {
    return {
      type: "SET_EVENTS",
      events
    };
  }

export const startSetEvents = () => {
    return (dispatch) => {
        return axios.get('/events').then(res => {
            dispatch(setEvents(res.data));
        })
    }
};

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event,
});

export const startAddEvent = (eventData = {}) => {
    return (dispatch) => {
        axios.post('../../event/create', eventData).then((res) => {
            dispatch(addEvent(res.data));
        }).catch(err => {
            console.log(err.response)
        })
    }
}