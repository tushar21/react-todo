var todoId = 1;
import {ACTIONS} from '../../helpers/constants'

export const ADD_TODO = (description:string)=>{
    return {
        type: ACTIONS.ADD_TODO,
        id: todoId++,
        description: description
    }
}

export const REMOVE_TODO = (id: number)=>({
    type: ACTIONS.REMOVE_TODO,
    id: id
})

export const UPDATE_TODO = (id: number, description: string)=>({
    type: ACTIONS.REMOVE_TODO,
    id: id,
    description: description
})
