import React from 'react';
import classes from './Friends.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import { followAPI, unfollowAPI } from '../../api/api';

let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [ ];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i);
    }

    return (<div className={classes.friends}>
    <div className={classes.pagination}>
     {pages.map( p => {
         return <span onClick={()=> {props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage}> {p} </span>
       })}
    </div>
    {props.users.map(u => 
      <div key={u.id}>
        <NavLink to={'Profile/' + u.id}>
          <img className={classes.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"/>
        </NavLink>
        <span>{u.name}</span> <br/>
         {u.followed 
        ? <button onClick={() => {
          unfollowAPI.unfollow(u)
            .then(data => {
              if(data.resultCode == 0) {
                props.unfollow(u.id);
              }
            })
          
        } }>Unfollow</button> 
        : <button onClick={() => { 
          followAPI.follow(u)
            .then(data => {
              if(data.resultCode == 0) {
                props.follow(u.id);
              }
            })
          }} >Follow</button>}
      </div>)}
  </div>)
}

export default Friends;