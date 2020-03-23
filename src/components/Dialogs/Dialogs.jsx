import React from 'react';
import classes from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.dialogsPage.massages.map(m => <Massage massage={m.massage} />);

    let newMassageElement = React.createRef();
    let addMassage = () => {
        props.onAddMassage()
    }
    let newMassageSend = () => {
        let massage = newMassageElement.current.value;
        props.onNewMassageSend(massage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                <textarea   ref={newMassageElement} 
                            value={props.dialogsPage.massageText}
                            placeholder="Enter new massage"
                            onChange={newMassageSend} /><br/>
                <button onClick={ addMassage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;