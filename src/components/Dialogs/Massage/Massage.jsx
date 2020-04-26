import React from 'react';
import classes from './../Dialogs.module.css';


const Massage = (props) => {
    return (
        <div className={classes.massage}>
            {props.massage}
        </div>
    );
}

export default Massage;