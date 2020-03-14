import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.state.massages.map(m => <Massage massage={m.massage}/>);

    let newMassageElement = React.createRef();
    let addMassage = () => {
        let massage = newMassageElement.current.value;
        alert(massage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                <textarea name="" id="" cols="30" rows="5" ref={newMassageElement}></textarea><br/>
                <button onClick={ addMassage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;