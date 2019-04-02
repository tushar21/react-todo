const intialTodos =  []
const todos = (state=intialTodos, action) =>{
    switch (action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                 {
                    id: action.id,
                    description: action.description
                }
            ]
            
        case 'REMOVE_TODO':
            console.log(action.id, 'action.id in remove todos')
            let newTodos = state.filter((todo)=>{
                return todo.id != action.id 
            })
            console.log(newTodos, 'newTodos');
            return newTodos
        default:
            return state       
    }
}


export default todos;