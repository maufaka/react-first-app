import React from 'react';
import classes from './Friends.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Friend = ({user, followingInProgress, unfollow, follow}) => {
  return <div>
        <NavLink to={'Profile/' + user.id}>
          <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" />
        </NavLink>
        <span>{user.name}</span> <br />
        {user.followed
          ? <button disabled={ followingInProgress.some(id => id === user.id) } 
              onClick={() => { unfollow(user.id) }
              }>Unfollow</button>
          : <button disabled={ followingInProgress.some(id => id === user.id) } 
              onClick={() => { follow(user.id) }
              }>Follow</button>}
      </div>
}

export default Friend;