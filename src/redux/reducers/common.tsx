import{ACTIONS} from '../../helpers/constants';
import {Notification, NotificationStatus} from '../../types/Notification'

interface CommonStates  {
    loading: boolean,
    notification: Notification
}

const initialState:CommonStates = {
    loading : false,
    notification: {status: false, message: '', type: NotificationStatus.Default}
}

const commonReducers = (state = initialState, action:any) =>{
    switch (action.type) {
        case ACTIONS.APP_LOADER: 
            return {...state, loading: action.payload}
        
        case ACTIONS.SHOW_NOTIFICATION: 
            return {...state, notification: {status: true, ...action.payload}}
        
        case ACTIONS.HIDE_NOTIFICATION: 
            return {...state, notification: {...initialState.notification}}
          
        default:
            return state       
    }
}

export default commonReducers;