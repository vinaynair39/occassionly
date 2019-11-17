import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startGetUserDetails} from '../actions/user';
export const UserDetails = ({user, handle,getUserDetails, follows}) => {
    
    const [userData, setUserData] = useState([]);
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    useEffect(() => {
        console.log(handle);
        if(handle){
            getUserDetails(handle).then(data => {
                setUserData(data.user);
                setFollowers(data.follows.followers);
                setFollowing(data.follows.following);
            });

        }

    },[])

    return(
        <div className="my-blogs__user-card">
            <img src={userData.imageURL || user.imageURL} alt="" />
            <h2>{(userData.name && userData.name) || (user.name && user.name)}</h2>
            <h3>userHandle: {userData.handle || user.handle}</h3>
            <h3>Followers:{followers.length || follows.followers.length}</h3>
            <h3>Following:{following.length || follows.following.length}</h3>
            {(userData.bio && <h3>bio: {userData.bio}</h3>)||(user.bio && <h3>bio: {user.bio}</h3>)}
            {/* <div>
                <label>website: </label>{(userData.website && (<a href={userData.website} alt="">{userData.website}</a>))||(user.website && <a href={user.website} alt="">{user.website}</a>)}
            </div> */}
            {user.handle === sessionStorage.getItem('userHandle') && <Link to="edit"><button className="button button-editProfile">Edit Profile</button></Link>
            }
            
        </div>
    );
}

const mapStateToProps = (state,props) => ({
    user: props.handle ? '' : state.user.user,
    follows: state.user.follows
})
const mapDispatchToProps = (dispatch) => ({
    getUserDetails: (handle) => dispatch(startGetUserDetails(handle)),  
})
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);