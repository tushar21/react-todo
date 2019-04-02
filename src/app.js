import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {AppHeader} from './components/header'
import {AppFooter} from './components/footer'
import TodosList from './containers/todoList/TodosList'
import {AddTodo} from './containers/AddTodo'
import {ErrorBoundary} from './containers/ErrorBoundadry'
export default class App extends Component{
    render(){
        return(
            <Router>
                <ErrorBoundary>
                    <AppHeader/>
                        <div className="container">
                            <Route path='/' exact component={TodosList} />
                            <Route path='/todos/add' component={AddTodo} />
                            <Route path='/todos' component={TodosList} />                        
                        </div>
                    <AppFooter/>
                </ErrorBoundary>
            </Router>
        )
    }
}