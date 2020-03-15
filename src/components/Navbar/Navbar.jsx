import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
  let friendsElement = props.state.friends.map( f => <Friends name={f.name}/>);
    return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/Profile" activeClassName={classes.active}>
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/Dialogs" activeClassName={classes.active}>
            Massages
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/News" activeClassName={classes.active}>
            News
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/Music" activeClassName={classes.active}>
            Music
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/Settings" activeClassName={classes.active}>
            Settings
          </NavLink>
        </div>
        <div className={classes.itemFriends}>
          <h3 className={classes.itemFriendsHeader}>Friends</h3>
          { friendsElement }
        </div>
      </nav>
    );
}

export default Navbar;