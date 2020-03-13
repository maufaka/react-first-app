import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div className={classes.content}>
        <div className={classes.contentImg}>
          <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" />
        </div>
        <div className={classes.desc}>
          ava + discription
        </div>
      </div>
    );
}

export default ProfileInfo;