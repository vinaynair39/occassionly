import React, {useState} from 'react';
import { connect } from 'react-redux';
import {startLogin } from '../actions/auth';
import isEmail from 'validator/lib/isEmail';
import Link from 'react-router-dom/Link';
import Tilt from 'react-tilt';
import { faGoogle, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const LoginPage = ({ startLogin, error,unsetError, loading}) => {

    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const onStartLogin = (e) => {
        e.preventDefault(); 
        if(isEmail(email)){
            const credentials = {
                email,
                password
            };
            
            startLogin(credentials).then(() => {
            })
        }
    }

    const showErrors = () => {
        if(!!error)
            alert(error);
            unsetError();
    }
    return(
        <div className="box-layout">
            {loading && <div class="spinner"></div>}
            <div className="box-layout__box  animated fadeInDown delay-1s">
                <div className="box-layout__logo">
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="/images/logo.png" alt=""/>
                        <h1 className="box-layout__title animated flash delay-2s">Occasionly</h1>
                    </Tilt>
                </div>
                <h2 className="box-layout__subtitle">Explore different activities held in RAIT</h2>
                <div className="box-layout__form">
                    <form onSubmit={onStartLogin}>
                        <input  type="email" value={email}
                        onChange={e => (getEmail(e.target.value))}
                        placeholder="email"
                        className="animated fadeInLeft delay-2s"
                        />
                        <input type="password" value={password}  
                        onChange={e => (getPassword(e.target.value))}
                        placeholder={error ? <p>{error}</p> : "password"}
                        className="animated fadeInRight delay-2s"
                        />
                        <button className="button button-primary">Login</button>    
                        <h5>or login using</h5>
                        <div className="box-layout__signin"> 
                            <button>
                                <FontAwesomeIcon icon={faGoogle}size="3x"/>
                            </button> 
                            <button>
                                <FontAwesomeIcon icon={faFacebookSquare}  size="3x"/>
                            </button>
                            
                        </div>
                    </form>
                    {error && showErrors()}
                    <label className="box-layout__question animated infinite pulse">no account?</label> <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (credentials)=> dispatch(startLogin(credentials)),
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