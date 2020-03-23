import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map(p => <Post massage={p.post} likes={p.likesCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.onAddPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }
    return (
      <div>
        <h3>my posts</h3>
        <div>
          <textarea cols="30" rows="5" 
                    ref={ newPostElement } 
                    value={props.profilePage.newPostText} 
                    onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={ addPost } >Add Post</button>
        </div>
        <div className={classes.item}>new post</div>
        {postsElements}
      </div>
    );
}

export default MyPosts;