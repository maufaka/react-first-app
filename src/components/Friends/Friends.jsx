import React from "react";
import classes from './Friends.module.css';

const Friends = (props) => {
    return <div className={classes.friends}>
        {props.users.map(u => 
          <div key={u.id}>
            <img src={u.photoURL} alt="ava" className={classes.userPhoto}/>
            <span>{u.fullname}</span> <br/>
            <span>{u.status}</span> <br/>
            <span>{u.location.country}</span>
            <span>{u.location.city}</span>
            {u.followed 
            ? <button onClick={() => { props.unfollow(u.id) } }>Unfollow</button> 
            : <button onClick={() => { props.follow(u.id) } } >Follow</button>}
          </div>)}
      </div>
}

export default Friends;