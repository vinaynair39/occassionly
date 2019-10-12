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