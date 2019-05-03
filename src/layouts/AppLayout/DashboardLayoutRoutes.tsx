import * as React from 'react'
import { Route } from 'react-router-dom'
import DashboardLayout from './DashboardLayout';

const DashboardLayoutRoutes = ({component: Component, ...rest}: any) => {   
  return (  
    <Route {...rest} render={matchProps => ( 
        <DashboardLayout>          
            <Component {...matchProps} />  
        </DashboardLayout>
    )} />  
  )  
};  

export default DashboardLayoutRoutes;
