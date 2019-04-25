import Todo from '../../types/todo';
import CONSTANTS from '../constants';

const intialTodos:Array<Todo> = []
const todos = (state=intialTodos, action:any) =>{
    switch (action.type) {
        case CONSTANTS.ADD_TODO: 
        console.log(action, 'In the todo reducers')
            return [
                ...state,
                 {
                    id: action.id,
                    description: action.description
                }
            ]
            
        case CONSTANTS.REMOVE_TODO:
            let newTodos = state.filter((todo)=>{
                return todo.id != action.id 
            })
            return newTodos
        default:
            return state       
    }
}


export default todos;