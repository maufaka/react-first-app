import {rerenderEtireTree} from './../render'

let state = {
    profilePage: {
        posts : [
            {id: 1, post: "Hello, world!4", likesCount: 8},
            {id: 2, post: "Hello, world!3", likesCount: 9},
            {id: 3, post: "Hello, world!2", likesCount: 10},
            {id: 4, post: "Hello, world!", likesCount: 11},
            {id: 5, post: "It's my first post!", likesCount: 12}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id:1, name: "Anna"},
            {id:1, name: "Tom"},
            {id:1, name: "Jack"}
        ]
    }
}

export let addPost = (postMassage) => {
    let newPost = {
        id: 6,
        post: postMassage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEtireTree (state);
}

export default state;