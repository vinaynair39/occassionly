import axios from 'axios';
import {history} from '../routers/AppRouter';
export const setEvents = (events) => {
    return {
      type: "SET_EVENTS",
      events
    };
  }

export const startSetEvents = () => {
    return (dispatch) => {
        return axios.get('https://us-central1-sem5proj-19434.cloudfunctions.net/api/events').then(res => {
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
        axios.post('https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/create', eventData).then((res) => {
            dispatch(addEvent(res.data));
        }).catch(err => {
            console.log(err.response)
        })
    }
}
export const editEvent = (id, update) => ({
    type: 'EDIT_EVENT',
    id,
    update
});

export const startEditEvent = (id, update={}) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_UI'});
        axios.post(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${id}/edit`, update).then(res => {
            dispatch(editEvent(id, res.data))
            dispatch({type: 'UNLOADING_UI'});
            history.goBack();

            return res.data;
        })
    }

}

export const removeEvent = (id) => ({
    type: 'REMOVE_EVENT',
    id
});

export const startRemoveEvent= (id) => {
    return (dispatch) => {
        axios.delete(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${id}/cancel`).then((res) => {
            dispatch(removeEvent(id))
            window.alert(res.data.success);
            history.push('/dashboard');
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
        return axios.post(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${eventID}/like`).then((res) => {
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
        return axios.post(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${eventID}/unlike`).then((res) => {
            dispatch(unLikeEvent(eventID))
        }).catch(err => {
            if(err.response)
                alert(err.response.data.error)
            console.log(err)
        })
    }
}


export const registerEvent = () => ({
    type: 'REGISTER_EVENT',
});

export const startRegisterEvent = (id) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_UI'});
        axios.post(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${id}/register`).then(res => {
            dispatch(registerEvent(id));
            alert(res.data.message);
            dispatch({type: 'UNLOADING_UI'});
            history.goBack();
            return res.data;
        }).catch(err => {
            if(err.response)
                alert(err.response.data.error)
            console.log(err)
        })
    }
}

export const unRegisterEvent = (id, update) => ({
    type: 'UNREGISTER_EVENT',
});

export const startUnRegisterEvent = (id) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_UI'});
        axios.post(`https://us-central1-sem5proj-19434.cloudfunctions.net/api/event/${id}/unregister`).then(res => {
            dispatch(unRegisterEvent());
            alert(res.data.message);
            dispatch({type: 'UNLOADING_UI'});
            history.goBack();
            return res.data;
        }).catch(err => {
            if(err.response)
                alert(err.response.data.error)
            console.log(err)
        })
    }


}