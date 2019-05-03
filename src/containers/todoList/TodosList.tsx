import * as React from 'react'
import { connect } from 'react-redux'
import { Todos } from '../../components/Todos'
import {Link} from 'react-router-dom';
import Todo from '../../types/todo';
import {REMOVE_TODO} from '../../redux/actions/todos'
import {TodoDetails} from '../../containers/Todo'
import TodoType from '../../types/todo';


interface TodoProps {
    todos:Array<Todo>,
    removeTodo? : (id:number)=>void,
}


class TodosList extends React.Component<TodoProps>{

    constructor(props: TodoProps){
        super(props)
    }

    render(){
        const {todos} = this.props
        return (
            <div>
                <h4>Todo Listing</h4>
                <Link to={'/todos/add'}>Add Todo</Link>
                {   
                    todos.map((todo: TodoType)=>{
                        return <TodoDetails key={todo.id} todo={todo} removeTodo={()=>this.props.removeTodo(todo.id)}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state:any):TodoProps => {
    return {todos: state.todos}
}

const matchDispatchToProps = (dispatch:any) =>{
    return {
        removeTodo : (id:number) => dispatch(REMOVE_TODO(id))
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(TodosList)