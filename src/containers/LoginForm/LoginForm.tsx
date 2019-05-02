import * as React from 'react'
import User from 'types/user'

interface LoginFields {
    email : string;
    password: string
}
interface LoginFormState{
    user: LoginFields
} 

interface LoginFormProps{
    onLogin: (user: LoginFields) => void
}
export default class UserLoginForm extends React.Component<LoginFormProps, LoginFormState> {

    constructor(props:LoginFormProps){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const initialUser = {email: '', password: '' } as LoginFields
        this.state = {user: initialUser}
    }

    handleLogin(event:any){
        event.preventDefault();
        this.props.onLogin(this.state.user);
    }

    handleChange(event:any ,key: string){
        this.setState({user: {...this.state.user, [key]: event.target.value}});
    }

    render(){
        const {user} = this.state;
        return (<div>
            <form onSubmit={this.handleLogin}>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email"  value={user.email} onChange={(e)=>this.handleChange(e, 'email')}/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"  value={user.password} onChange={(e)=>this.handleChange(e, 'password')}/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        )
    }    
} 
