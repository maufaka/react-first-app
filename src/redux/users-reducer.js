const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id:1, fullname: "Anna T.", followed: true, status: "Hay all!", location: {country: "Russia", city: "Moscow"}, photoURL: "https://cdn3.iconfinder.com/data/icons/fillies-small/64/id-card-512.png"},
        {id:2, fullname: "Tommy L.", followed: false, status: "Hay everyone!", location: {country: "USA", city: "New York"}, photoURL: "https://cdn3.iconfinder.com/data/icons/fillies-small/64/id-card-512.png"},
        {id:3, fullname: "Jack W.", followed: true, status: "Hay you!", location: {country: "Ukraine", city: "Kiev"}, photoURL: "https://cdn3.iconfinder.com/data/icons/fillies-small/64/id-card-512.png"},
        {id:4, fullname: "Dimych K.", followed: false, status: "Hay man!", location: {country: "Belarus", city: "Minsk"}, photoURL: "https://cdn3.iconfinder.com/data/icons/fillies-small/64/id-card-512.png"}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        } 
        
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        default: return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;