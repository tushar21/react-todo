import * as React from 'react'
import { connect } from 'react-redux'
import User from 'types/user'
import { USER_SIGNUP } from '../../redux/actions/user'
import { SignupForm } from '../../containers/SignupForm';

interface SignProps {
    userSignup: (payload: any) => void;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        userSignup: (user: User) => { dispatch(USER_SIGNUP(user)) }
    }
}

export class UserSignupPage extends React.Component<SignProps> {

    constructor(props: SignProps){
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(user: User) {
        this.props.userSignup(user);
    }

    render() {
        return (<div>
            <h2>Signup</h2>
            <SignupForm onSignup={this.handleSignup} />
        </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(UserSignupPage)