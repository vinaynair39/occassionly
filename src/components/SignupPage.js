import React, {useState} from 'react';
import { connect } from 'react-redux';
import {startSignUp } from '../actions/auth';
import isEmail from 'validator/lib/isEmail';
import Tilt from 'react-tilt';
// import { Input } from 'semantic-ui-react'
export const LoginPage = ({ startSignUp, error, setUIErrors, loading, unsetError}) => {

    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [userHandle, getUserHandle] = useState('');
    const [confirmPassword, getConfirmPassword] = useState('');
    const [name, getName] = useState('');
    const [college, getCollege] = useState('');


    const credentials = {};
    let errors;
    const onStartSignUp = (e) => {
        e.preventDefault(); 
        console.log('yolo')
        if(isEmail(email)){
            credentials.email = email;  
        }
        else{
            errors = 'invalid Email';
        }
        if(password === confirmPassword){
            credentials.password = password;
            credentials.confirmPassword = confirmPassword;
            credentials.college = college;
        }
        else{
            errors = 'password and confirm password does not match';
        }
        if((name.length !== 0)){
            credentials.name = name;
        }
        else{
            errors = 'Please provide a name';
        }
        if(!!errors)
        {   
            console.log(errors);
            setUIErrors(errors)

        }  
        else
            startSignUp(credentials);


}
const showErrors = () => {
    if(!!error)
        alert(error);
        unsetError();
}
    return(
          <div className="box-layout">
            {loading && <div class="spinner"></div>}
            <div className="box-layout__signup-box animated fadeInDown delay-1s">
                <Tilt className="Tilt" options={{ max : 25 }} >
                    <h1 className="box-layout__title animated flash delay-2s">Ocassionly</h1>
                </Tilt>
                <h2 className="box-layout__subtitle">Explore different activities held in RAIT</h2>
                <div className="box-layout__form">
                    {error.length > 0 && showErrors()}
                    <form onSubmit={onStartSignUp}>
                       <input type="text" value={name}  
                        placeholder="Name"
                        onChange={e => (getName(e.target.value))}/>
                        <input type="text" value={college}  
                        placeholder="College"
                        onChange={e => (getCollege(e.target.value))}/>
                        <input  type="email" value={email}
                        placeholder="email"
                        onChange={e => (getEmail(e.target.value))}/>
                        <input type="password" value={password}  
                        placeholder="Password"
                        onChange={e => (getPassword(e.target.value))}/>
                        <input type="password" value={confirmPassword}  
                        placeholder="confirm Password"
                        onChange={e => (getConfirmPassword(e.target.value))}/>
                        
                        <button className="button button-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startSignUp: (credentials)=> dispatch(startSignUp(credentials)),
    setUIErrors: (error) => dispatch({
        type: 'SET_ERRORS',
        error: error
    }),
    unsetError: () => dispatch({
        type: 'SET_ERRORS',
        error: ''
    })
});

const mapStateToProps = (state) => ({
    error: state.auth.error ? state.auth.error : [],
    loading: state.auth.loading
   
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);