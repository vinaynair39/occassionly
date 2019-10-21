import axios from 'axios';

export const checkLikeEvent = (condition) => {
    return {
      type: "CHECK_LIKE_EVENT",
      condition
    };
  }

export const setCheckLikeEvent = (eventId) => {
    return (dispatch) => {
        return axios.get(`${eventId}/checkLike`).then((res) => {
            dispatch(checkLikeEvent(res.data))
            return res.data;
        }).catch(err => {
            if(err.response)
                alert(err.response.data)
            console.log(err)
        })
    }
}

export const getAuthenticatedUser =  (user, notifications,follows) => {
    return{
        type: 'GET_AUTHENTICATED_USER',
        user,
        notifications,
        follows
    };
};
export const startGetAuthenticatedUser =  () => {
    return (dispatch) => {
        return axios.get(`/user/profile`).then(res => {
            dispatch(getAuthenticatedUser(res.data.credentials, res.data.notifications,res.data.follows))
        }).catch(err => console.log(err.response))
    }
};


export const getUserHandle =  (userHandle) => {
    return{
        type: 'GET_USERHANDLE',
        userHandle
    };
};
export const startGetUserHandle =  () => {
    return (dispatch) => {
        return axios.get('/user/userHandle').then(async res => {
            dispatch(getUserHandle(res.data))
            console.log(res.data);
            await sessionStorage.setItem('userHandle', res.data)
        }).catch(err => console.log(err.response))
    }
};