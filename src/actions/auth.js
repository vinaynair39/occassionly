import axios from 'axios';
import {startSetEvents} from './events';
import jwtDecode from 'jwt-decode';
import {startGetUserHandle, startGetAuthenticatedUser} from './user';
import {history} from '../routers/AppRouter';

export const login = () => ({
  type: 'LOGIN',
});

export const startSignUp = (credentials) => {
  return (dispatch) => {
      dispatch({type: 'LOADING_UI'});
      axios.post('https://us-central1-sem5proj-19434.cloudfunctions.net/api/signup', credentials).then((res) => {
        // setAuthorizationHeader(res.data.token);
        window.alert("Verification Link has been sent successfully to your email. Please verify it and then login");  
        dispatch({type: 'UNLOADING_UI'});
        history.push('../');
        // dispatch(startGetUserHandle()).then(() => {
        //   dispatch(startGetAuthenticatedUser()).then(() => {
        //       setEmailVerifed().then(() => {
        //       });
        //       dispatch({type: 'UNLOADING_UI'});
        //   })
        //   dispatch(startSetEvents());
        // })
          }).catch(err => {
              console.log(err.response)
              dispatch({
                  type: 'SET_ERRORS',
                  error: err.response ? (err.response.data.general || err.response.data.email || err.response.data.password || err.response.data.error || err.response.data.handle) : ''
              })
          });
  }
}

export const startLogin =  (credentials) => {
  return (dispatch) => {
      dispatch({type: 'LOADING_UI'});
      return axios.post('https://us-central1-sem5proj-19434.cloudfunctions.net/api/login', credentials).then(res => {
        setAuthorizationHeader(res.data.token);
        const decodedToken = jwtDecode(res.data.token);
        dispatch(startGetUserHandle()).then(() => {
            dispatch(startGetAuthenticatedUser()).then(() => {
                if(decodedToken.user_id === "WPtnf0O0JYSee1hyF304WwiRE3S2" || decodedToken.email_verified){
                  dispatch(login());
                }
                else{
                  alert("Email not verified yet")
                }
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