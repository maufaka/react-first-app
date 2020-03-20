import React from "react";
import MyPosts from "./MyPosts";
import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_ACTION_CREATOR} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState()
  let onAddPost = () => {
    props.store.dispatch(ADD_POST_ACTION_CREATOR ());
  }
  let onPostChange = (text) => {
    props.store.dispatch(UPDATE_NEW_POST_ACTION_CREATOR (text));
  }

    return (
      <MyPosts  onPostChange={onPostChange} 
                onAddPost={onAddPost} posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;