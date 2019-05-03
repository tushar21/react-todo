import * as React from 'react'

import AppHeader from '../../components/header/Header'
import {AppFooter} from '../../components/footer'
import {getLoggedInUser} from '../../services/user';
import { Redirect  } from 'react-router'

const DashboardLayout = (props:any) => {  

    const loginUser = getLoggedInUser();
    if(!loginUser) {  return(<Redirect to="/login"/>) ;}

    return (  
      <div className="page page-dashboard">  
        <AppHeader/>
        <div className="container">{props.children}</div>  
        <AppFooter/>
      </div>  
    )  
}  


export default DashboardLayout;