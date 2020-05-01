import { authMeAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }
        } 
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} })

export const getAuthUserData = () => (dispatch) => {
        return authMeAPI.authMe()
            .then(response => {
                if(response.resultCode === 0) {
                    //let {userId, email, login} = response.data;
                    dispatch( setAuthUserData(response.data.id, response.data.email, response.data.login, true) );
                }
            });
    }


export const getAuthUserLogin = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authMeAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch( getAuthUserData() );
                }
                else{
                    let message = response.messages.length > 0 ? response.messages[0] : "Some error";
                    dispatch( stopSubmit("login", {_error: message}) )
                }
            });
    }
}

export const getAuthUserLogout = () => {
    return (dispatch) => {
        authMeAPI.logout()
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch( setAuthUserData(null, null, null, false) );
                }
            });
    }
}

export default authReducer;