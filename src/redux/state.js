import {rerenderEtireTree} from './../render'

let state = {
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
}

window.state = state;
export let addPost = () => {
    let newPost = {
        id: 6,
        post: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEtireTree (state);
}
export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEtireTree (state);
}

export let addMassage = () => {
    let newMassage = {massage: state.dialogsPage.massageText}
    state.dialogsPage.massages.push(newMassage);
    state.dialogsPage.massageText = '';
    rerenderEtireTree (state);
}

export let sendNewMassage = (newTextMass) => {
    state.dialogsPage.massageText = newTextMass;
    rerenderEtireTree (state);
}

export default state;