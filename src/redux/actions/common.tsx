import {ACTIONS} from '../../helpers/constants'
import {Notification} from '../../types/Notification'

export const APP_LOADER = (status:boolean)=>{
    return {
        type: ACTIONS.APP_LOADER,
        payload: status
    }
}

export const SHOW_NOTIFICATION = (payload: Notification)=>{
    return {
        type: ACTIONS.SHOW_NOTIFICATION,
        payload: payload
    }
}

export const HIDE_NOTIFICATION = ()=>{
    return {
        type: ACTIONS.HIDE_NOTIFICATION
    }
}
