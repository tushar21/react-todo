import React from 'react'
import {NoRecordFound}  from '../common/noRecordFound'
import {Todo} from '../../containers/Todo'
import {BootstrapTable} from '../common/BootstrapTable';

export default (props)=>{

    const todoList = <BootstrapTable headerRows={['ID', 'Description', 'Action']}>
        {
            props.todos.map((todo)=>{
                return <Todo key={todo.id} todo={todo} />
            })
        }
        </BootstrapTable>


    return(
        <div>
            {props.todos.length ? todoList : <NoRecordFound/>}
        </div>        
    )
    
}