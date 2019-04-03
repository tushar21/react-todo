import * as React from "react"
import {NoRecordFound}  from '../common/noRecordFound'
import {TodoDetails} from '../../containers/Todo'
import {BootstrapTable} from '../common/BootstrapTable';
import TodoType from '../../types/todo';

interface TodoProps{
    todos: Array<TodoType>
}


export default (props: TodoProps)=>{

    const todoList = <BootstrapTable headerRows={['ID', 'Description', 'Action']}>
        {
            props.todos.map((todo: TodoType)=>{
                return <TodoDetails key={todo.id} todo={todo} />
            })
        }
        </BootstrapTable>


    return(
        <div>
            {props.todos.length ? todoList : <NoRecordFound/>}
        </div>        
    )
    
}