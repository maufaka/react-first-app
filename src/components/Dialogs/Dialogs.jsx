import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.state.massages.map(m => <Massage massage={m.massage} />);

    let newMassageElement = React.createRef();
    let addMassage = () => {
        let massage = newMassageElement.current.value;
        props.dispatch({type: 'ADD-MASSAGE', newMassage: massage});
    }

    let newMassageSend = () => {
        let massage = newMassageElement.current.value;
        props.dispatch({type: 'SEND-NEW-MASSSAGE', newTextMass: massage});
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                <textarea   cols="30" rows="5" 
                            ref={newMassageElement} 
                            value={props.state.massageText}
                            onChange={newMassageSend} /><br/>
                <button onClick={ addMassage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;