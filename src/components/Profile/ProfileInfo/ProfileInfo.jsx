import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/preloader';
import backgroundFon from '../../../assets/images/background.png';
import Status from './Status'

const ProfileInfo = (props) => {
  if(!props.profile) {
      return <Preloader />
  }
    return (
      <div className={classes.content}>
        <div className={classes.contentImg}>
          <img src={backgroundFon} />
        </div>
        <div className={classes.desc}>
          <h2>{props.profile.fullName}</h2>
          <img src={props.profile.photos.large} alt="logo"/><br />
            <Status status={props.status} updateProfileUserStatus={props.updateProfileUserStatus}/>
          <span>{props.profile.aboutMe}</span>
        </div>
      </div>
    );
}

export default ProfileInfo;