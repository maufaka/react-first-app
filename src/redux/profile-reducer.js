const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts : [
        {id: 1, post: "Hello, world!4", likesCount: 8},
        {id: 2, post: "Hello, world!3", likesCount: 9},
        {id: 3, post: "Hello, world!2", likesCount: 10},
        {id: 4, post: "Hello, world!", likesCount: 11},
        {id: 5, post: "It's my first post!", likesCount: 12}
    ],
    newPostText: "Add new Post!"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: {
        let newPost = {
            id: 6,
            post: state.newPostText,
            likesCount: 0
        };
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
    }
        
    case UPDATE_NEW_POST:
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;
    default:
        return state;
    }
}
export default profileReducer;


export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_ACTION_CREATOR = (text) => 
    ({type: UPDATE_NEW_POST, newText: text });