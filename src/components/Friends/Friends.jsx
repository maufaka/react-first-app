import React from "react";
import classes from './Friends.module.css';

const Friends = (props) => {
    debugger;
    // let friendsElement = props.state.friends.map( f => <Friends />);

    return (
      <div className={classes.friends}>
        <img src="https://cdn3.iconfinder.com/data/icons/fillies-small/64/id-card-512.png" />
          {props.name}
      </div>
    );
}

export default Friends;