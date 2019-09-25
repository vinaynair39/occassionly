import React from 'react';
import moment from 'moment';
import Link from 'react-router-dom/Link';
import { faHeart, faComment, faShare ,faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {history} from '../routers/AppRouter';

export const EventListItem = ({ eventName, description, time, date, location, fee, id}) => (
    <div className={"list-card" + ((history.location.pathname === '/myblogs' || history.location.pathname.includes('/user')) ? " my-blogs__list-card":"")}>
        <div className="list-card__body">
            {/* <div className="list-card__image">
                <img src={imageUrl} alt="" />
            </div> */}
            <div className="list-card__content">
            <Link className="list-card__body-title" to={`/blog/${id}`}>
                    {eventName}
                {/* <div className="list-card__body-author">
                    <img src={userImageUrl} alt=""/>
                    <h3>{userHandle}</h3>
                </div>   */}
                <div>
                    <p className="list-card__content-text">description</p>
                </div>
            </Link>
            </div>
            
            <div className="list-card__body-date">
                <div>
                    <h5>{time}</h5>
                    <h6>{date}</h6>
                </div>
                <ul>
                    <li><FontAwesomeIcon icon={faHeart}  size="2x"/></li>
                    <li><FontAwesomeIcon icon={faComment}  size="2x"/></li>
                    <li><FontAwesomeIcon icon={faShare} size="2x"/></li>
                </ul>
            </div>
            </div>
            
            <div className="list-card__fab">
                <Link to={`/blog/${id}`}>
                    <FontAwesomeIcon icon={faArrowDown} color="white" size="3x"/>
                </Link>
            </div>  
        </div>
);

export default EventListItem;