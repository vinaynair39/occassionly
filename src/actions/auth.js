import axios from 'axios';
import {startSetEvents} from './events';
import {startGetUserHandle, startGetAuthenticatedUser} from './user';

export const login = () => ({
  type: 'LOGIN',
});


export const startSignUp = (credentials) => {
  return (dispatch) => {
      dispatch({type: 'LOADING_UI'});
      axios.post('/signup', credentials).then((res) => {
        setAuthorizationHeader(res.data.token);
        dispatch(startGetUserHandle()).then(() => {
          dispatch(startGetAuthenticatedUser()).then(() => {
              dispatch(login());
              dispatch({type: 'UNLOADING_UI'});
          })
          dispatch(startSetEvents());
        })
          }).catch(err => {
              console.log(err.response)
              dispatch({
                  type: 'SET_ERRORS',
                  error: err.response ? (err.response.data.general || err.response.data.email || err.response.data.password || err.response.data.error) : ''
              })
          });
  }
}

export const startLogin =  (credentials) => {
  return (dispatch) => {
      dispatch({type: 'LOADING_UI'});
      return axios.post('/login', credentials).then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch(startGetUserHandle()).then(() => {
            dispatch(startGetAuthenticatedUser()).then(() => {
                dispatch(login());
            })
            dispatch(startSetEvents()).then(() => {
                dispatch({type: 'UNLOADING_UI'});
        })
        })
        }).catch(err => {
              console.log(err.response)
              dispatch({
                  type: 'SET_ERRORS',
                  error: err.response ? (err.response.data.general || err.response.data.err ) : ''
              })
          });
}};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
      sessionStorage.removeItem('FBIdToken');
      sessionStorage.removeItem('userHandle');
      delete axios.defaults.headers.common['Authorization'];
      dispatch(logout());
  };
};


const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  sessionStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};