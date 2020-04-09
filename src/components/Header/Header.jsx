import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
      <header className={classes.header}>
        <img src="https://seeklogo.net/wp-content/uploads/2017/04/New-Google-Earth-logo.png" />
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login 
            : <NavLink to={'/login'} className={classes.loginItem}>
            Login
          </NavLink>}
        </div>
      </header>
    );
}

export default Header;