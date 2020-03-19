const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MASSAGE = 'ADD-MASSAGE';
const SEND_NEW_MASSAGE = 'SEND-NEW-MASSSAGE';

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, post: "Hello, world!4", likesCount: 8},
                {id: 2, post: "Hello, world!3", likesCount: 9},
                {id: 3, post: "Hello, world!2", likesCount: 10},
                {id: 4, post: "Hello, world!", likesCount: 11},
                {id: 5, post: "It's my first post!", likesCount: 12}
            ],
            newPostText: "Add new Post!"
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id:1, name: "Anna"},
                {id:1, name: "Tom"},
                {id:1, name: "Jack"}
            ]
        }
    },
    _callSubscriber () {
        console.log('state changed');
    },
    getState () {
        return this._state
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
          let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
          };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MASSAGE) {
            let newMassage = { massage: this._state.dialogsPage.massageText };
            this._state.dialogsPage.massages.push(newMassage);
            this._state.dialogsPage.massageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-NEW-MASSSAGE') {
            this._state.dialogsPage.massageText = action.newTextMass;
            this._callSubscriber (this._state);
        }
    }
}

export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_ACTION_CREATOR = (text) => 
    ({type: UPDATE_NEW_POST, newText: text });
export const ADD_MASSAGE_ACTION_CREATOR = () => ({type: ADD_MASSAGE});
export const SEND_NEW_MASSAGE_ACTION_CREATOR = (massage) => 
({type: SEND_NEW_MASSAGE, newTextMass: massage});

export default store;
window.store = store;