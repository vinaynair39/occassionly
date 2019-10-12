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


export const likeEvent = (id) => {
    return {
      type: "LIKE_EVENT",
      id
    };
  }

export const setLikeEvent = (eventID) => {
    return (dispatch) => {
        return axios.post(`../event/${eventID}/like`).then((res) => {
            dispatch(likeEvent(eventID))
        }).catch(err => {
            if(err.response)
                alert(err.response.data.error)
            console.log(err)
        })
    }
}

export const unLikeEvent = (id) => {
    return {
      type: "UNLIKE_EVENT",
      id
    };
  }

export const setUnLikeEvent = (eventID) => {
    return (dispatch) => {
        return axios.post(`../event/${eventID}/unlike`).then((res) => {
            dispatch(unLikeEvent(eventID))
        }).catch(err => {
            if(err.response)
                alert(err.response.data.error)
            console.log(err)
        })
    }
}