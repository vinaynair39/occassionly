import React from 'react';
import moment from 'moment';
import Link from 'react-router-dom/Link';
import { faHeart, faComment, faShare ,faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {history} from '../routers/AppRouter';

export const EventListItem = ({ eventName, description, time, userHandle, imageUrl, date, location, fee, id ,venues}) => (
    <div className={"list-card" + ((history.location.pathname === '/myblogs' || history.location.pathname.includes('/user')) ? " my-blogs__list-card":"")}>
        <div className="list-card__body">
            <div className="list-card__image">
                {imageUrl ? <img src={imageUrl} alt=""/> : <img src='/images/img5.jpeg' alt=""/>}
            </div>
            <div className="list-card__content">
            <Link className="list-card__body-title" to={`/event/${id}`}>
                    {eventName}
                <div className="list-card__body-author">
                    
                    <h3>{userHandle}</h3>
                </div>  
                <div>
                    <p className="list-card__content-text">{description}</p>
                </div>
            </Link>
            </div>
            <div className="list-card__body-date">
                <div>
                    <h6>{moment(date).format("MMM Do YY")}</h6>
                </div>
                <ul>
                    {/* <li><FontAwesomeIcon icon={faHeart}  size="lg"/></li>
                    <li><FontAwesomeIcon icon={faComment}  size="lg"/></li>
                    <li><FontAwesomeIcon icon={faShare} size="lg"/></li> */}
                </ul>
            </div>
            </div>
            
            {/* <div className="list-card__fab">
                <Link to={`/blog/${id}`}>
                    <FontAwesomeIcon icon={faArrowDown} color="white" size="3x"/>
                </Link>
            </div>   */}
        </div>
);

export default EventListItem;