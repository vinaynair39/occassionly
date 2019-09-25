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