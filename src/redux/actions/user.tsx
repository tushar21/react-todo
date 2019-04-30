import CONSTATS from '../constants'
import User from '../../types/user'

export const USER_SIGNUP = (user:User)=>{
    console.log( 'action USER_SIGNUP')
    return {
        type: CONSTATS.USER_SIGNUP,
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
