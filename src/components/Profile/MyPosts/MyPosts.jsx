import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPostReduxForm from './Post/AddPostForm';

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map(p => <Post massage={p.post} likes={p.likesCount} />);

  let addPost = (value) => {
    props.onAddPost(value.newPostBody);
  }
    return (
      <div>
        <h3>my posts</h3>
        <AddPostReduxForm onSubmit={addPost}/>
        <div className={classes.item}>new post</div>
        {postsElements}
      </div>
    );
}

export default MyPosts;