import * as  React from 'react'
import { Switch } from "react-router-dom"
import TodosList from './containers/todoList/TodosList'
import { AddTodo } from './containers/AddTodo'
import { ErrorBoundary } from './containers/ErrorBoundadry'
import { LoginPage } from './Pages/Login'
import { ConnectedRouter } from 'connected-react-router'

import { SignupPage } from './Pages/Signup'
import LoginLayout from './layouts/LoginLayout/LoginLayoutRoutes'
import DashboardLayout from './layouts/AppLayout/DashboardLayoutRoutes'
import { SpinnerLoader } from './components/common/spinner'
import {history} from "./redux/store"
import {ROLES} from './helpers/constants';

export default class App extends React.Component {

    render() {
        return (
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                        <SpinnerLoader/>
                        <Switch>
                            <DashboardLayout path='/boards' allowedRoles={[ROLES.ADMIN, ROLES.AUTHENTICATED]} component={TodosList} />
                            <DashboardLayout path='/boards/add' component={AddTodo} />

                            <LoginLayout path='/login' component={LoginPage} />
                            <LoginLayout path='/signup' component={SignupPage} />
                        </Switch>
                    
                </ErrorBoundary>
            </ConnectedRouter>
        )
    }
}
