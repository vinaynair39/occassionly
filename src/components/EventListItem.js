import React from 'react';
import moment from 'moment';
import Link from 'react-router-dom/Link';
import { faCalendarAlt, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from '../routers/AppRouter';

export const EventListItem = ({ eventName, description, userImageUrl, time, userHandle, imageUrl, startTime, endTime,eventId, location, startDate, endDate, fee, id, venues }) => (
    <div className={"list-card" + ((history.location.pathname === '/myblogs' || history.location.pathname.includes('/user')) ? " my-blogs__list-card" : "")}>
        <div className="list-card__body">
            <div className="list-card__image">
                {imageUrl ? <img src={imageUrl} alt="" /> : <img src='/images/img5.jpeg' alt="" />}
            </div>
            <div className="list-card__content">
                {console.log("bitch"+id)}
                <Link className="list-card__body-title" to={`/event/${id||eventId}`}>
                    {eventName}
                    <div className="list-card__body-author">
                        <img src={userImageUrl} alt="" />
                        <h3>{userHandle}</h3>
                    </div>
                    <div>
                        <p className="list-card__content-text">{description.substring(0, 300) + ' ...'}</p>
                    </div>
                </Link>
            </div>
            <div className="list-card__body-date">
                <div><h6><FontAwesomeIcon icon={faClock}/>{" " + startTime + " - " + endTime}</h6></div>
                <div>
                    <h6><FontAwesomeIcon icon={faCalendarAlt} />{" " + startDate.split(',')[0] + (endDate !== startDate ? " - " + endDate.split(',')[0] : "")}</h6>
                </div>
                <ul>
                    {/* <li><FontAwesomeIcon icon={faHeart}  size="lg"/></li>
                    <li><FontAwesomeIcon icon={faComment}  size="lg"/></li>
                    <li><FontAwesomeIcon icon={faShare} size="lg"/></li> */}
                </ul>
            </div>
        </div>

        <div className="list-card__fab">
                <Link to={`/event/${id}`}>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" color="#eb6e80"/>
                </Link>
            </div>  
    </div>
);

export default EventListItem;