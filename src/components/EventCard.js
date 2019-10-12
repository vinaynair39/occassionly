import React, {useState,useEffect} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link'
import {setLikeEvent, setUnLikeEvent,} from '../actions/events';
import {setCheckLikeEvent} from '../actions/user';
// import Comments from './Comments'
import { faHeart , faCalendarAlt, faPenAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const EventCard = (props) => {
    const [likeCount, setLikeCount] = useState(props.event.likeCount);
    const [checkLike, setCheckLike] = useState(props.checkLike)
    const id = props.match.params.id;

    useEffect(() => {
        props.checkLikeEvent(id).then(data => {
            setCheckLike(data)
        });
    },[])

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

    return(
        <div className="content-container event-card">
            {props.event.userHandle === props.userHandle && <Link to={`../edit/${props.event.id}`}>
            <button>Edit</button>
            </Link>
            }
            <h2 className="event-card__title">{props.event.eventName}</h2>
            <div className="event-card__by">
            <img src={props.event.userImageUrl} alt=""/> <Link to={`../user/${props.event.userHandle}`} ><p><FontAwesomeIcon icon={faPenAlt} color="salmon"/> {props.event.userHandle}</p></Link>
                <p><FontAwesomeIcon icon={faCalendarAlt} color="salmon"/>  {moment(props.event.createdAt).format("Do MMM YYYY")}</p>
            </div>
            <div className=""event-card__image>
                <img src={props.event.imageUrl} alt=""/>
            </div>
            <div>
                <p>{props.event.description}</p>
            </div>
            {checkLike ? (<button className="btn-secondary" onClick={onClickUnLike}><FontAwesomeIcon icon={faHeart}/> {likeCount}</button>) : (
            <button className="btn-primary" onClick={onClickLike}><FontAwesomeIcon icon={faHeart}/> {likeCount}</button>) }
            {/* <button className="btn-secondary like-review"
            onClick={onClickLike}><FontAwesomeIcon icon={faHeart}/>{checkLike ? likeCount + " you liked this event!": likeCount}
            </button>
            <button 
            onClick={onClickUnLike}>Unlike */}
            {/* </button> */}
            {/* <Comments commentCount={props.event.commentCount} id={id} /> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    likeEvent: (eventId) => dispatch(setLikeEvent(eventId)),
    unLikeEvent: (eventId) => dispatch(setUnLikeEvent(eventId)),
    checkLikeEvent: (eventId) => dispatch(setCheckLikeEvent(eventId)),    
});

const mapStateToProps = (state, props) => ({
    event: state.events.find(event => event.id === props.match.params.id),
    userHandle : state.auth.userHandle,
    checkLike: state.user.checkLike
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);