import React from "react";
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateProfileUserStatus={props.updateProfileUserStatus}/>
        <MyPostsContainer store={props.store}/>
      </div>
    );
}

export default Profile;