import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Massage from './Massage/Massage';
import Dialog from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: "Artem"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Andrew"}
    ];

    let massageData = [
        {id: 1, massage: "Yo!"},
        {id: 2, massage: "Hi"},
        {id: 3, massage: "How are you?"},
        {id: 4, massage: "Hello my friend!"}
    ];

    let dialogsElement = dialogData.map( d => <Dialog name={d.name} id={d.id}/> );
    let massageElement = massageData.map(m => <Massage massage={m.massage}/>)

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