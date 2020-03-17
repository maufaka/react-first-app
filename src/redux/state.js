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
            massageText: "Send new massage"
        },
        sidebar: {
            friends: [
                {id:1, name: "Anna"},
                {id:1, name: "Tom"},
                {id:1, name: "Jack"}
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('state changed');
    },
    addPost () {
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber (this._state);
    },
    updateNewPost (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber (this._state);
    },
    addMassage () {
        let newMassage = {massage: this._state.dialogsPage.massageText}
        this._state.dialogsPage.massages.push(newMassage);
        this._state.dialogsPage.massageText = '';
        this._callSubscriber (this._state);
    },
    sendNewMassage (newTextMass) {
        this._state.dialogsPage.massageText = newTextMass;
        this._callSubscriber (this._state);
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    }
}
export default store;
window.store = store;