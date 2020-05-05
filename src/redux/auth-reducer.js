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

export const getAuthUserData = () => async (dispatch) => {
    let response = await authMeAPI.authMe()
    if (response.resultCode === 0) {
        let {id, email,login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const getAuthUserLogin = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        let response = await authMeAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {
                _error: message
            }))
        }
    }
}

export const getAuthUserLogout = () => {
    return async (dispatch) => {
        let response = await authMeAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;