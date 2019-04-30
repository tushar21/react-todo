import * as React from 'react'
import { connect } from 'react-redux'
import {ADD_TODO} from '../../redux/actions/todos'
import Todo from '../../types/todo'


const mapDispatchToProps = (dispatch:any) => {
    return {
        addTodo : (description:string) => {dispatch(ADD_TODO(description))}
    }
}

interface AddTodoState {
    todo: Todo,
    address:string
}

interface AddTodoProps{
    addTodo? : (todo:any)=> void
}


class AddTodo extends React.Component<AddTodoProps, AddTodoState>{
    constructor(props:AddTodoProps){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        const initialTodo  = { todo : { description: ''}  } as AddTodoState
        this.state = { ...initialTodo, address : ''};
    }

    handleChange(event:any){        
        const target = event.target
        const name = target.name
        this.setState({
            todo: {
                ...this.state.todo,
                [name]: target.value
            }
        })
    }

    handleSubmit(event:any){
        this.props.addTodo(this.state.todo.description)
        let initialTodo = {todo: {description: ''}} as AddTodoState;
        event.preventDefault();
        this.setState({...initialTodo})
        
    }

    render(){
        const {todo} = this.state;
        return (<div>             
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" rows={5} id="description" name="description" value={todo.description} onChange={this.handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>);
    }
}


export default connect(mapDispatchToProps)(AddTodo)