import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
      <div className={classes.dialog + ` ` + classes.active}>
        <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
      </div>
    );
}

export default Dialog;