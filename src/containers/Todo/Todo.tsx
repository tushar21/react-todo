import * as React from 'react'
import {connect} from 'react-redux'
import {REMOVE_TODO} from '../../redux/actions/todos'
import Todo from '../../types/todo';

interface TodoDetailProps {
    removeTodo? : (id:number)=>void,    
    todo?: Todo
}
const matchDispatchToProps = (dispatch:any) =>{
    return {
        removeTodo : (id:number) => dispatch(REMOVE_TODO(id))
    }
}


class TodoDetails extends React.Component<TodoDetailProps, {}>{
    constructor(props:TodoDetailProps){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(id:number){
        this.props.removeTodo(id);
    }

    render(){
        const todo = this.props.todo
        return (
            <tr key={todo.id}><td>{todo.id}</td><td>{todo.description}</td><td><button type="button" className="btn btn-danger btn-sm" onClick={()=>this.removeTodo(todo.id)}>Delete</button></td></tr>
        )
    }
} 


export default connect(null, matchDispatchToProps)(TodoDetails)

