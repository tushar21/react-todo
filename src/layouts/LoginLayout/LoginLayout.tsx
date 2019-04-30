import * as React from 'react'

const LoginLayout = (props:any) => {  
    return (  
        <div className="container">  
            {props.children}
        </div>
    )  
}  

export default LoginLayout;