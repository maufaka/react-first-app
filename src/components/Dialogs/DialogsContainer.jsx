import Dialogs from './Dialogs';
import {ADD_MASSAGE_ACTION_CREATOR, SEND_NEW_MASSAGE_ACTION_CREATOR} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMassage: () => {dispatch(ADD_MASSAGE_ACTION_CREATOR ())},
        onNewMassageSend: (massage) => {dispatch(SEND_NEW_MASSAGE_ACTION_CREATOR (massage))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)