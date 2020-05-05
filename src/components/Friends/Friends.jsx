import React from 'react';
import classes from './Friends.module.css';
import Paginator from './../common/Paginator/Paginator'
import Friend from './Friend';

let Friends = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {

  return (<div className={classes.friends}>
    <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} 
      onPageChanged={onPageChanged} currentPage={currentPage}/>
    {users.map(u => <Friend key={u.id} user={u} 
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  />
      )}
  </div>)
}

export default Friends;