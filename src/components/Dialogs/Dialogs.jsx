import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';
import {ADD_MASSAGE_ACTION_CREATOR, SEND_NEW_MASSAGE_ACTION_CREATOR} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.state.massages.map(m => <Massage massage={m.massage} />);

    let newMassageElement = React.createRef();
    let addMassage = () => {
        // let massage = newMassageElement.current.value;
        props.dispatch(ADD_MASSAGE_ACTION_CREATOR ());
    }

    let newMassageSend = () => {
        let massage = newMassageElement.current.value;
        props.dispatch(SEND_NEW_MASSAGE_ACTION_CREATOR (massage));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                <textarea   ref={newMassageElement} 
                            value={props.state.massageText}
                            placeholder="Enter new massage"
                            onChange={newMassageSend} /><br/>
                <button onClick={ addMassage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;