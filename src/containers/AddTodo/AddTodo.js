import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ADD_TODO} from '../../redux/actions/todos'

const mapDispatchToProps = dispatch => {
    return {
        addTodo : todo => {dispatch(ADD_TODO(todo))}
    }
}

class AddTodo extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.initialTodo = {todo: { description: ''}}
        this.state = this.initialTodo;
    }

    handleChange(event){
        const target = event.target
        const name = target.name
        this.setState({
            todo: {
                ...this.state.todo,
                [name]: target.value
            }
        })
    }

    handleSubmit(event){
        this.props.addTodo(this.state.todo)

        console.log(this.initialTodo, 'this.initialTodo');

        event.preventDefault();
        this.setState({...this.initialTodo})
        
    }

    render(){
        const {todo} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" rows="5" id="description" name="description" value={todo.description} onChange={this.handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(AddTodo)