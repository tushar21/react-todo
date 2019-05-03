import{ACTIONS} from '../../helpers/constants';

const initialState = {
    loggedinuser : false ,
    loading: false
}


const users = (state = initialState, action:any) =>{
    switch (action.type) {
        case ACTIONS.USER_SIGNUP: 
            return {...state, loading: true} 
        
        case ACTIONS.USER_LOGIN: 
            return {...state, loading: true} 
            
        case ACTIONS.USER_LOGIN_SUCCESS: 
            return {...state, loggedinuser: action.payload, loading: false}        

        case ACTIONS.USER_SIGNUP_SUCCESS: 
            return {...state, user: action.payload, loading: false}        
        default:
            return state       
    }
}

export default users;