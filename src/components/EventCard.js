import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'
import { setLikeEvent, setUnLikeEvent, } from '../actions/events';
import { setCheckLikeEvent } from '../actions/user';
import { startRegisterEvent, startUnRegisterEvent} from '../actions/events';
// import Comments from './Comments'
import { faHeart, faCalendarAlt, faClock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const EventCard = (props) => {
    const [likeCount, setLikeCount] = useState(props.event.likeCount);
    const [checkLike, setCheckLike] = useState(props.checkLike)
    const id = props.match.params.id;

    useEffect(() => {
        props.checkLikeEvent(id).then(data => {
            setCheckLike(data)
        });
    }, [])

    const onClickLike = () => {
        props.likeEvent(id).then(() => {
            setLikeCount(likeCount + 1);
            setCheckLike(true)
        });
    };

    const onClickUnLike = () => {
        props.unLikeEvent(id).then(() => {
            setLikeCount(likeCount - 1);
            setCheckLike(false)
        });
    };

    const startRegisterEvent = () => {
        props.registerEvent(id);
    }
    const startUnRegisterEvent = () => {
        props.unRegisterEvent(id);
    }

    return (
        <div className="content-container event-card">
            {props.event.userHandle === props.userHandle && <Link to={`../edit/${props.event.id}`}>
                <button className="button button-edit"><FontAwesomeIcon icon={faEdit} />Edit</button>
            </Link>
            }
            <h2 className="event-card__title">{props.event.eventName}</h2>
            <div className="event-card__by">
                <div className="event-card__by-name" >
                    <img src={props.event.userImageUrl} alt="" /> <Link to={`../user/${props.event.userHandle}`}>
                        <p> {props.event.userHandle}</p>
                        <p>{moment(props.event.createdAt).format("MMM do")}</p>
                    </Link>
                </div>
                <div className="event-card__by-like" >
                    {checkLike ? (<div className="event-card__button"><button title='unlike?' className="btn-secondary" onClick={onClickUnLike}><FontAwesomeIcon icon={faHeart} /> {likeCount}</button></div>) : (
                        <button title='like?' className="btn-primary" onClick={onClickLike}><FontAwesomeIcon icon={faHeart} /> {likeCount}</button>)}
                </div>
            </div>
            <div className="event-card__image">
                <img src={props.event.imageUrl} alt="" />
            </div>
            <div className="event-card__description">
                <p>{props.event.description}</p>
            </div>
            <div className="event-card__others">
                <div>
                    <p>venue: {props.event.location}</p>
                    <p>fee: {props.event.fee}</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faCalendarAlt} />{" " + props.event.startDate + (props.event.endDate !== props.event.startDate ? " - " + props.event.endDate : "")}</p>
                    <p><FontAwesomeIcon icon={faClock}/>{" " + props.event.startTime + " - " + props.event.endTime}</p>    
                </div>
            </div>
            <div className="event-card__register">
            {(props.userHandle !== props.event.userHandle && !props.event.members.hasOwnProperty(props.userHandle)) && <button className="btn-secondary button-register" onClick={startRegisterEvent}>Register</button>}
            {props.userHandle !== props.event.userHandle && <button className="btn-secondary button-join">join group chat</button>}
            {}
            {props.event.members.hasOwnProperty(props.userHandle) && <button className="btn-secondary button-register" onClick={startUnRegisterEvent}>Unregister</button>}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    likeEvent: (eventId) => dispatch(setLikeEvent(eventId)),
    unLikeEvent: (eventId) => dispatch(setUnLikeEvent(eventId)),
    checkLikeEvent: (eventId) => dispatch(setCheckLikeEvent(eventId)),
    registerEvent: (eventId) => dispatch(startRegisterEvent(eventId)),
    unRegisterEvent: (eventId) => dispatch(startUnRegisterEvent(eventId))

});

const mapStateToProps = (state, props) => ({
    event: state.events.find(event => event.id === props.match.params.id),
    userHandle: state.user.userHandle,
    checkLike: state.user.checkLike
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);