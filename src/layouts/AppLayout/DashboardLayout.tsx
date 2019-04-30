import * as React from 'react'

import AppHeader from '../../components/header/Header'
import {AppFooter} from '../../components/footer'

const DashboardLayout = (props:any) => {  
    return (  
      <div className="page page-dashboard">  
        <AppHeader/>
        <div className="container">{props.children}</div>  
        <AppFooter/>
      </div>  
    )  
}  


export default DashboardLayout;