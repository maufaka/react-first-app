import { ProfileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS';

let initialState = {
    posts : [
        {id: 1, post: "Hello, world!4", likesCount: 8},
        {id: 2, post: "Hello, world!3", likesCount: 9},
        {id: 3, post: "Hello, world!2", likesCount: 10},
        {id: 4, post: "Hello, world!", likesCount: 11},
        {id: 5, post: "It's my first post!", likesCount: 12}
    ],
    newPostText: "Add new Post!",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: {
        let newPost = {
            id: 6,
            post: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        }
    }
        
    case UPDATE_NEW_POST:
        return {
            ...state,
            newPostText: action.newText
        };
    case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile
        }

    case GET_USER_PROFILE_STATUS:
        return {
            ...state,
            status: action.status
        }    

    default:
        return state;
    }
}
export default profileReducer;

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfileStatus = (status) => ({type: GET_USER_PROFILE_STATUS, status});
export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_ACTION_CREATOR = (text) => 
    ({type: UPDATE_NEW_POST, newText: text });


export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId)
            .then((response) => {
                dispatch( setUserProfile(response) );
        });
    }
}

export const getProfileUserStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then((response) => {
                dispatch( getUserProfileStatus(response) );
        });
    }
}

export const updateProfileUserStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserProfileStatus(status));
                }
        });
    }
}