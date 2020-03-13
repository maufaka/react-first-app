import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img className={classes.itemImg} src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt="ava" />
        {props.massage}
        <br />
        <img className={classes.likeImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/240px-Bot%C3%B3n_Me_gusta.svg.png" alt="like"/>
        {props.likes}
      </div>
    );
}

export default Post;