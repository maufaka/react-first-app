import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.map(p => <Post massage={p.post} likes={p.likesCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST', newText: text });
    //console.log(text); // Проверка state на то что данные отправляются
  }

    return (
      <div>
        <h3>my posts</h3>
        <div>
          <textarea cols="30" rows="5" 
                    ref={ newPostElement } 
                    value={props.newPostText} 
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