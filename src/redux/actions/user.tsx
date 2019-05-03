import {ACTIONS} from '../../helpers/constants'
import User, {LoginFields} from '../../types/user'

export const USER_SIGNUP = (user:User)=>{
    console.log( 'action USER_SIGNUP')
    return {
        type: ACTIONS.USER_SIGNUP,
        payload: user
    }
}


export const USER_LOGIN = (user:LoginFields)=>{
    return {
        type: ACTIONS.USER_LOGIN,
        payload: user
    }
}

export const USER_LOGIN_SUCCESS = (user:LoginFields)=>{
    return {
        type: ACTIONS.USER_LOGIN_SUCCESS,
        payload: user
    }
}


export const USER_SIGNUP_SUCCESS = (payload:any)=>{
    console.log(payload, 'action USER_SIGNUP_SUCCESS')
    return {
        type: ACTIONS.USER_SIGNUP_SUCCESS,
        payload: payload
    }
}
