import CONSTATS from '../constants'
import User, {LoginFields} from '../../types/user'

export const USER_SIGNUP = (user:User)=>{
    console.log( 'action USER_SIGNUP')
    return {
        type: CONSTATS.USER_SIGNUP,
        payload: user
    }
}


export const USER_LOGIN = (user:LoginFields)=>{
    return {
        type: CONSTATS.USER_LOGIN,
        payload: user
    }
}

export const USER_LOGIN_SUCCESS = (user:LoginFields)=>{
    return {
        type: CONSTATS.USER_LOGIN_SUCCESS,
        payload: user
    }
}


export const USER_SIGNUP_SUCCESS = (payload:any)=>{
    console.log(payload, 'action USER_SIGNUP_SUCCESS')
    return {
        type: CONSTATS.USER_SIGNUP_SUCCESS,
        payload: payload
    }
}
