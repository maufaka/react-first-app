import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = props.state.massages.map(m => <Massage massage={m.massage}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElement }
                {/* <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                <Dialog name={dialogData[3].name} id={dialogData[3].id}/> */}
            </div>
            <div className={classes.dialogMassages}>
                {massageElement}
                {/* <Massage massage={massageData[0].massage}/>
                <Massage massage={massageData[1].massage} />
                <Massage massage={massageData[2].massage} />
                <Massage massage={massageData[3].massage} /> */}
            </div>
        </div>
    );
}

export default Dialogs;