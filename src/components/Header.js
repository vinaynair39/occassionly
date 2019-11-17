import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom'
import {history} from '../routers/AppRouter';
import { faPlus, faBlog, faBell, faCommentAlt, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtDecode from 'jwt-decode';



const Header = (props) => {

    const [toggle, setToggle] = useState(false);
    const [display, setDisplay] = useState(false);

    const onClick = () => {
        setToggle(!toggle)
    }

    const showDropdownMenu = (event) => {
        event.preventDefault();
        setDisplay(true);
        document.addEventListener('click', hideDropdownMenu);
    }
    const hideDropdownMenu = () => {
        setDisplay(false);
        document.removeEventListener('click', this.hideDropdownMenu);

    }

    const getNotifications = () => {
        return props.notifications.map(notification => {
            const path = notification.notificationId ? '/event/' + notification.eventId : '/dashboard';
            return <Link to={path}><button>{notification.sender} {notification.type === 'like' ? 'liked' : 'commented on'} your event</button></Link>
        })
    }

        return (
            <div className="header">
                <div className="header__content">
                    <div >
                        <Link to="/dashboard" className="header__title"><img src="/images/logo.png" alt="" /><h1 >Ocassionly</h1></Link>
                    </div>
                    <div className="header__links" >
                        <input type="checkbox" id="toggler" />
                        <div id="hamburger">
                            <div></div>
                        </div>
                        <div id="desktop-menu">
                            <div>
                                <div>
                                    <ul id="menuToggle">
                                        <Link to="../add"><button className="scale"><FontAwesomeIcon icon={faPlus}/></button></Link>
                                        <button title="Chatroom for the events you joined" className="header__chat-button scale" ><FontAwesomeIcon icon={faCommentAlt} /></button>
                                        <button title="Notificiations" className="header__notification-button scale" data-badge={props.notifications.length}><FontAwesomeIcon icon={faBell} size="lg" /></button>
                                        <div className="button-dropdown">
                                            <button className="button-dropbtn"><FontAwesomeIcon icon={faUserCircle} size="lg" /></button>
                                            <div className="button-dropdown__content">
                                                <div><Link to="../../me"><button className="button-logout">{props.userHandle}</button></Link></div>
                                                <div><button onClick={props.logout} className="button-logout">Logout</button></div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="menu">
                            <div>
                                <div>
                                    <ul>
                                        <button className="header__chat-button">Chats <FontAwesomeIcon icon={faCommentAlt} /></button>
                                        <button className="header__notification-button" data-badge={props.notifications.length} onClick={showDropdownMenu}>Notifications <FontAwesomeIcon icon={faBell} size="lg" /></button>
                                        <Link to="../../me"><button className="button-logout">{props.userHandle}</button></Link>
                                        <button onClick={props.logout} className="button-logout">Logout<FontAwesomeIcon icon={faSignOutAlt} /></button>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    {toggle && <ul>{getNotifications()}</ul>}
                </div>
            </div>


        );
    }

    const mapStateToProps = (state) => ({
        notifications: state.user.notifications,
        userHandle: state.user.userHandle
    })
    const mapDispatchToProps = (dispatch) => {
        return {
            logout: () => dispatch(startLogout())
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Header);