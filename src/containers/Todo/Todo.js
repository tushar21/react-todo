import React, {Component} from 'react'
import {connect} from 'react-redux'
import {REMOVE_TODO} from '../../redux/actions/todos'

const matchDispatchToProps = (dispatch, ownProps) =>{
    return {
        removeTodo : (id) => dispatch(REMOVE_TODO(id))
    }
}


class TodoDetails extends Component{
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        const todo = this.props.todo
        return (
            <tr key={todo.id}><td>{todo.id}</td><td>{todo.description}</td><td><button type="button" className="btn btn-danger btn-sm" onClick={()=>this.removeTodo(todo.id)}>Delete</button></td></tr>
        )
    }
} 


export default  connect(null, matchDispatchToProps)(TodoDetails)

