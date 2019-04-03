import * as React from 'react'
import { connect } from 'react-redux'
import { Todos } from '../../components/Todos'
import {Link} from 'react-router-dom';
import Todo from '../../types/todo';


interface TodoProps {
    todos:Array<Todo>;
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
                <Todos todos={todos}/>
            </div>
        )
    }
}

const mapStateToProps = (state:any):TodoProps => {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodosList)