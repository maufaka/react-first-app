import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Massage = (props) => {
    return (
        <div className={classes.massage}>
            {props.massage}
        </div>
    );
}

export default Massage;