import * as React from 'react'
import User from 'types/user'

interface SignupFormState{
    user: User
} 

interface SignupFormProps{
    onSignup: (user: User) => void
}
export default class UserSignupForm extends React.Component<SignupFormProps, SignupFormState> {

    constructor(props:SignupFormProps){
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const initialUser = { name: '', username : '', email: '', password: '' } as User
        this.state = {user: initialUser}
    }

    handleSignup(event:any){
        event.preventDefault();
        this.props.onSignup(this.state.user);
    }

    handleChange(event:any ,key: string){
        this.setState({user: {...this.state.user, [key]: event.target.value}});
    }

    render(){
        const {user} = this.state;
        return (<div>
            <form onSubmit={this.handleSignup}>
                
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" value={user.name} onChange={(e)=>this.handleChange(e, 'name')}/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" value={user.username} onChange={(e)=>this.handleChange(e, 'username')}/>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email"  value={user.email} onChange={(e)=>this.handleChange(e, 'email')}/>
                    
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"  value={user.password} onChange={(e)=>this.handleChange(e, 'password')}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }    
} 
