import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import {Link} from 'react-router-dom'
import { faPlus, faBlog,faBell, faCommentAlt, faUserCircle, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = (props) =>{

    const [toggle, setToggle] = useState(false);
    const onClick = ()=> {
        setToggle(!toggle)
     }

    const getNotifications = () => {
        return props.notifications.map(notification => {
            const path = notification.blogId ? '/blog/' + notification.blogId : '/dashboard';
            return <Link to={path}><li>{notification.sender} {notification.type === 'like' ? 'liked': 'commented on'} your blog</li></Link>
        })
    }


    return (
        <div className="header">
            <div className="header__content">
                <div >
                    <Link to="/dashboard" className="header__title"><img src="/images/logo.png" alt=""/><h1 >Ocassionly</h1></Link>
                </div>
                <div className="header__links" >
                    <input type="checkbox" id="toggler"/>
                    <div id="hamburger">
                        <div></div>
                    </div>
                        <div id="desktop-menu">
                            <div>
                                <div>
                                    <ul>
                                        <button title="Chatroom for the events you joined" className="header__chat-button"><FontAwesomeIcon icon={faCommentAlt}/></button>
                                        <button title="Notificiations"className="header__notification-button" data-badge={2} onClick={onClick}><FontAwesomeIcon icon={faBell} size="lg"/></button>
                                        <div className="button-dropdown">
                                            <button className="button-dropbtn"><FontAwesomeIcon icon={faUserCircle} size="lg"/></button>
                                            <div className="button-dropdown__content">
                                                <div><button onClick={props.logout} className="button-logout">User Profle</button></div>
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
                                        <button className="header__chat-button">Chats <FontAwesomeIcon icon={faCommentAlt}/></button>
                                        <button className="header__notification-button" data-badge={2} onClick={onClick}>Notifications <FontAwesomeIcon icon={faBell} size="lg"/></button>
                                        <button onClick={props.logout} className="button-logout">User Profle <FontAwesomeIcon icon={faUserCircle}/></button>
                                        <button onClick={props.logout} className="button-logout">Logout <FontAwesomeIcon icon={faSignOutAlt}/></button>
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
    notifications: state.auth.notifications,
    userHandle: state.auth.userHandle
})
const mapDispatchToProps = (dispatch) => {
    return {
      logout: ()=> dispatch(startLogout())
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);