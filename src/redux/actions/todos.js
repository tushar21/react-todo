var todoId = 1;

export const ADD_TODO = (description)=>{
    return {
        type: 'ADD_TODO',
        id: todoId++,
        ...description
    }
}

export const REMOVE_TODO = (id)=>({
    type: 'REMOVE_TODO',
    id: id
})


export const UPDATE_TODO = (id, description)=>({
    type: 'REMOVE_TODO',
    ...id,
    ...description
})