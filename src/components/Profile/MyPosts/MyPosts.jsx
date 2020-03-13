import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, post: "Hello, world!4", likesCount: 8},
    {id: 2, post: "Hello, world!3", likesCount: 9},
    {id: 3, post: "Hello, world!2", likesCount: 10},
    {id: 4, post: "Hello, world!", likesCount: 11},
    {id: 5, post: "It's my first post!", likesCount: 12}
  ];

  let postsElements = postData.map(p => <Post massage={p.post} likes={p.likesCount} />)


    return (
      
      <div>
        <h3>my posts</h3>
        <div className={classes.item}>new post</div>
        {postsElements}
      </div>
    );
}

export default MyPosts;