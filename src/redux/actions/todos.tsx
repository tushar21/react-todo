var todoId = 1;

export const ADD_TODO = (description:string)=>{

    console.log(description, 'description in action')
    return {
        type: 'ADD_TODO',
        id: todoId++,
        description: description
    }
}

export const REMOVE_TODO = (id: number)=>({
    type: 'REMOVE_TODO',
    id: id
})


export const UPDATE_TODO = (id: number, description: string)=>({
    type: 'REMOVE_TODO',
    id: id,
    description: description
})