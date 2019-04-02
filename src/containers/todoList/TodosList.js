import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Todos } from '../../components/Todos'
import {Link} from 'react-router-dom';

class TodosList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h4>Todo Listing</h4>
                <Link to={'/todos/add'}>Add Todo</Link>
                <Todos todos={this.props.todos}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodosList)