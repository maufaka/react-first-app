import React from 'react';
import Dialogs from './Dialogs';
import {ADD_MASSAGE_ACTION_CREATOR, SEND_NEW_MASSAGE_ACTION_CREATOR} from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onAddMassage = () => {
        props.store.dispatch(ADD_MASSAGE_ACTION_CREATOR ());
    }

    let onNewMassageSend = (massage) => {
        props.store.dispatch(SEND_NEW_MASSAGE_ACTION_CREATOR (massage));
    }

    return <Dialogs onAddMassage={onAddMassage}
                    onNewMassageSend={onNewMassageSend}
                    dialogs={state.dialogsPage.dialogs}
                    massages={state.dialogsPage.massages}
                    massageText={state.dialogsPage.massageText}/>
}

export default DialogsContainer;