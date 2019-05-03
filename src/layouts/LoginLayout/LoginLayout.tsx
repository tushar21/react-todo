import * as React from 'react'
import { Redirect  } from 'react-router'
import {getLoggedInUser} from '../../services/user';
import {CONFIGS } from '../../helpers/constants'


const LoginLayout = (props:any) => {  

    const loginUser = getLoggedInUser();
    if(loginUser) {  return(<Redirect to={CONFIGS.DEFAULT_APP_PATH} />) ;}
    
    return (  
        <div className="container">  
            {props.children}
        </div>
    )  
}  

export default LoginLayout;