import React, {useState} from 'react';
import { connect } from 'react-redux';
import {startSignUp } from '../actions/auth';
import isEmail from 'validator/lib/isEmail';
import Tilt from 'react-tilt';
import Link from 'react-router-dom/Link';
export const LoginPage = ({ startSignUp, error, setUIErrors, loading, unsetError}) => {

    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [handle, getUserHandle] = useState('');
    const [confirmPassword, getConfirmPassword] = useState('');
    const [name, getName] = useState('');
    const [college, getCollege] = useState('');



    const onStartSignUp = (e) => {
        e.preventDefault(); 
        if(password===confirmPassword){
            const credentials = {
                email,
                name,
                password,
                confirmPassword,
                handle
            };
            startSignUp(credentials);
       
        }
        else{
            alert("Your password doesn't match!");
        }


}
const showErrors = () => {
    if(!!error)
        alert(error);
        unsetError();
}
    return(
          <div className="box-layout">
          <div className="box-layout__logo-outside animated fadeInDown delay-1s">
            </div>
            {loading && <div class="spinner"></div>}
            <div className="box-layout__signup-box animated fadeInRight delay-1s">
                <Tilt className="Tilt" options={{ max : 25 }} >
                    <h1 className="box-layout__title animated flash delay-2s">Ocassionly</h1>
                </Tilt>
                <h2 className="box-layout__subtitle">Explore different activities held in RAIT</h2>
                <div className="box-layout__form">
                    <form onSubmit={onStartSignUp}>
                       <input type="text" value={name}  
                        placeholder="Name"
                        onChange={e => (getName(e.target.value))}/>
                        <input type="text" value={handle}  
                        placeholder="user handle"
                        onChange={e => (getUserHandle(e.target.value))}/>
                        <input  type="email" value={email}
                        placeholder="email"
                        onChange={e => (getEmail(e.target.value))}/>
                        <input type="password" value={password}  
                        placeholder="Password"
                        onChange={e => (getPassword(e.target.value))}/>
                        <input type="password" value={confirmPassword}  
                        placeholder="confirm Password"
                        onChange={e => (getConfirmPassword(e.target.value))}/>
                        
                        <button className="button button-primary ">Sign Up</button>
                    </form>
                    {error && showErrors()}
                    <label className="box-layout__question  animated infinite pulse">Already have an account?</label> <Link to='/'>Login</Link>
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
    error: state.auth.error,
    loading: state.auth.loading
   
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);