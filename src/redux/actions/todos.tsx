var todoId = 1;
import CONSTATS from '../constants'

export const ADD_TODO = (description:string)=>{
    return {
        type: CONSTATS.ADD_TODO,
        id: todoId++,
        description: description
    }
}

export const REMOVE_TODO = (id: number)=>({
    type: CONSTATS.REMOVE_TODO,
    id: id
})

export const UPDATE_TODO = (id: number, description: string)=>({
    type: CONSTATS.REMOVE_TODO,
    id: id,
    description: description
})
