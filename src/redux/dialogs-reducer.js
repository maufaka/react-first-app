const ADD_MASSAGE = 'ADD-MASSAGE';
const SEND_NEW_MASSAGE = 'SEND-NEW-MASSSAGE';

export const ADD_MASSAGE_ACTION_CREATOR = () => ({type: ADD_MASSAGE});
export const SEND_NEW_MASSAGE_ACTION_CREATOR = (massage) => 
({type: SEND_NEW_MASSAGE, newTextMass: massage});

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