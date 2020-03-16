import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <ProfileInfo />
        <MyPosts  state={props.state.posts}
                  newPostText={props.state.newPostText}
                  addPost={props.addPost}
                  updateNewPost={props.updateNewPost} />
      </div>
    );
}

export default Profile;