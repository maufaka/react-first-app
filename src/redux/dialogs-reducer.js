const ADD_MASSAGE = 'ADD-MASSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = { massage: action.newMassageBody };
            return {
                ...state,
                massages: [...state.massages, newMassage]
            };
        default:
            return state;
      }
}

export default dialogsReducer;

export const ADD_MASSAGE_ACTION_CREATOR = (newMassageBody) => ({type: ADD_MASSAGE, newMassageBody});