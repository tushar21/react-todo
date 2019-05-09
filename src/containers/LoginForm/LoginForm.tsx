import * as React from 'react'
// import User from 'types/user'
import { Formvalidation } from '../../services/validation'
import { FormValidationType } from '../../types/FormValidation';

interface LoginFields {
    email: string;
    password: string
}
interface LoginFormState {
    user: LoginFields,
    errors: any
}

interface LoginFormProps {
    onLogin: (user: LoginFields) => void
}

export default class UserLoginForm extends React.Component<LoginFormProps, LoginFormState> {

    validator: any;
    errors:any

    constructor(props: LoginFormProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const initialUser = { email: '', password: '' } as LoginFields
        this.state = { user: initialUser, errors: {} }
        const validations: FormValidationType[] = [{ 'field': 'email', 'isEmail': true, 'message': 'Wrong email format' }, { 'field': 'password', 'minLength': 3, 'message': 'Length should be more than 3'}]
        this.validator = new Formvalidation(validations)
    }

    handleLogin(event: any) {
        event.preventDefault();
        let isValid = this.validator.validate(this.state.user);
        if(isValid){
            this.props.onLogin(this.state.user);
            this.setState({...this.state, errors: {}})
        }
        else{
            this.setState({...this.state, errors: this.validator.errors})
        }        
    }

    handleChange(event: any, key: string) {
        this.setState({ user: { ...this.state.user, [key]: event.target.value } });
    }

    render() {
        const { user, errors } = this.state;
        return (<div>
            <form onSubmit={this.handleLogin}>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="User email address" value={user.email} onChange={(e) => this.handleChange(e, 'email')} />
                    {
                        errors.email ?  <div className="alert alert-danger" role="alert">
                                    {errors.email}
                        </div>: ''
                    }
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" value={user.password} onChange={(e) => this.handleChange(e, 'password')} />
                    {
                        errors.password ? <div className="alert alert-danger" role="alert">
                                {errors.password}
                        </div>: ''
                    }
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        )
    }
} 
