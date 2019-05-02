import User from '../../types/user';
import CONSTANTS from '../constants';

const initialState = {
    user : {} ,
    loading: false
}


const users = (state = initialState, action:any) =>{
    switch (action.type) {
        case CONSTANTS.USER_SIGNUP: 
            return {...state, loading: true} 
        
        case CONSTANTS.USER_LOGIN: 
            return {...state, loading: true} 
            
        case CONSTANTS.USER_LOGIN_SUCCESS: 
            return {...state, loading: false}        

        case CONSTANTS.USER_SIGNUP_SUCCESS: 
            return {...state, user: action.payload, loading: false}        
        default:
            return state       
    }
}

export default users;