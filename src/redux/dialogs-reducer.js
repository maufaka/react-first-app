const ADD_MASSAGE = 'ADD-MASSAGE';
const SEND_NEW_MASSAGE = 'SEND-NEW-MASSSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = { massage: state.massageText };
            state.massages.push(newMassage);
            state.massageText = "";
        case SEND_NEW_MASSAGE:
            state.massageText = action.newTextMass;
            return state;
        default:
            return state;
      }
}

export default dialogsReducer;