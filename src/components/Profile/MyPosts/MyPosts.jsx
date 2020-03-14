import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.state.map(p => <Post massage={p.post} likes={p.likesCount} />);

    return (
      
      <div>
        <h3>my posts</h3>
        <div>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
        <div className={classes.item}>new post</div>
        {postsElements}
      </div>
    );
}

export default MyPosts;