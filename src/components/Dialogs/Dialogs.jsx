import React from 'react';
import classes from './Dialogs.module.css'
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';
import AddMassageReduxForm from './MassageForm';

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.dialogsPage.massages.map(m => <Massage massage={m.massage} />);

    let addMassage = (value) => {
        props.onAddMassage(value.newMassageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                <AddMassageReduxForm onSubmit={addMassage}/>
            </div>
        </div>
    );
}

export default Dialogs;