import Todo from '../../types/todo';

const intialTodos:Array<Todo> = []
const todos = (state=intialTodos, action:any) =>{
    switch (action.type) {
        case 'ADD_TODO': 
        console.log(action, 'In the todo reducers')
            return [
                ...state,
                 {
                    id: action.id,
                    description: action.description
                }
            ]
            
        case 'REMOVE_TODO':
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