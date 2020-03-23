import Dialogs from './Dialogs';
import {ADD_MASSAGE_ACTION_CREATOR, SEND_NEW_MASSAGE_ACTION_CREATOR} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMassage: () => {dispatch(ADD_MASSAGE_ACTION_CREATOR ())},
        onNewMassageSend: (massage) => {dispatch(SEND_NEW_MASSAGE_ACTION_CREATOR (massage))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;