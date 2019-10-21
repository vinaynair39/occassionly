import React from 'react';
import MyEventList from './MyEventList';
import UserDetails from './UserDetails';
const MyBlogsPage = (props) => (
    <div className="my-blogs">
        <div className="my-blogs__blogs">
            <MyEventList handle={props.match.params.handle}/>
        </div>
        <div className="my-blogs__user">
            <UserDetails handle={props.match.params.handle}/>
        </div>
    </div>
)

export default MyBlogsPage;