import * as  React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import TodosList from './containers/todoList/TodosList'
import { AddTodo } from './containers/AddTodo'
import { ErrorBoundary } from './containers/ErrorBoundadry'
import { LoginPage } from './Pages/Login'

import { SignupPage } from './Pages/Signup'
import LoginLayout from './layouts/LoginLayout/LoginLayoutRoutes'
import DashboardLayout from './layouts/AppLayout/DashboardLayoutRoutes'
import { SpinnerLoader } from './components/common/spinner'

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <ErrorBoundary>
                        <SpinnerLoader/>
                        <Switch>
                            <DashboardLayout path='/todos' component={TodosList} />
                            <DashboardLayout path='/todos/add' component={AddTodo} />

                            <LoginLayout path='/login' component={LoginPage} />
                            <LoginLayout path='/signup' component={SignupPage} />
                        </Switch>
                    
                </ErrorBoundary>
            </Router>
        )
    }
}