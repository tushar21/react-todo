import * as React from 'react'
import Todo from '../../types/todo';

interface TodoDetailProps {
    removeTodo? : (id:number)=>void,    
    todo?: Todo
}

export default (props:TodoDetailProps)=>{
    const {todo, removeTodo} = props
    return (
        <tr key={todo.id}><td>{todo.id}</td><td>{todo.description}</td><td><button type="button" className="btn btn-danger btn-sm" onClick={()=>removeTodo(todo.id)}>Delete</button></td></tr>
    )  
} 
