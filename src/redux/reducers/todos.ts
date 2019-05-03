import Todo from '../../types/todo';
import {ACTIONS} from '../../helpers/constants';

const intialTodos:Array<Todo> = []
const todos = (state=intialTodos, action:any) =>{
    switch (action.type) {
        case ACTIONS.ADD_TODO: 
        console.log(action, 'In the todo reducers')
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description
                }
            ]
            
        case ACTIONS.REMOVE_TODO:
            let newTodos = state.filter((todo)=>{
                return todo.id != action.id 
            })
            return newTodos
        default:
            return state       
    }
}


export default todos;