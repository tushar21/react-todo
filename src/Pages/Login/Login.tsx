import * as React from 'react'
import { connect } from 'react-redux'
import User, {LoginFields} from 'types/user'
import { USER_SIGNUP, USER_LOGIN } from '../../redux/actions/user'
import { LoginForm } from '../../containers/LoginForm';

interface LoginProps {
    userLogin: (payload: any) => void;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        userLogin: (user: LoginFields) => { dispatch(USER_LOGIN(user)) }
    }
}

class UserLoginPage extends React.Component<LoginProps> {

    constructor(props: LoginProps){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(user: LoginFields) {
        this.props.userLogin(user);
    }

    render() {
        return (<div>
            <h2>Login</h2>
            <LoginForm onLogin={this.handleLogin} />
        </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(UserLoginPage)