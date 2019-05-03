import * as React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import LoginLayout from './LoginLayout'
const LoginLayoutRoutes = ({component: Component,...rest}:any) => {  
    return (  
      <Route {...rest} render={matchProps => ( 
           <LoginLayout> <Component {...matchProps} /></LoginLayout>  
      )} />  
    )  
};  

export default LoginLayoutRoutes;
