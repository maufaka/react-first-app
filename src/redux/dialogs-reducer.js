const ADD_MASSAGE = 'ADD-MASSAGE';
const SEND_NEW_MASSAGE = 'SEND-NEW-MASSSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Artem"},
        {id: 3, name: "Valera"}
    ],
    massages: [
        {massage: "Hello, world!"},
        {massage: "Hey"},
        {massage: "How are you?"},
        {massage: "Hello my friend!"}
    ],
    massageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = { massage: state.massageText };
            return {
                ...state,
                massages: [...state.massages, newMassage],
                massageText: ''
            };
            
        case SEND_NEW_MASSAGE:            
            return {
                ...state,
                massageText: action.newTextMass
            };
        default:
            return state;
      }
}

export default dialogsReducer;

export const ADD_MASSAGE_ACTION_CREATOR = () => ({type: ADD_MASSAGE});
export const SEND_NEW_MASSAGE_ACTION_CREATOR = (massage) => 
({type: SEND_NEW_MASSAGE, newTextMass: massage});