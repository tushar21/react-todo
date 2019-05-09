import * as React from "react"
import { connect } from 'react-redux'

function NotificationComponent(props:any){

    const {notification} = props;
    const AlertClassNameMappings:any = {'success': 'alert-success','error': 'alert-danger', 'info': 'alert-primary'}
    const AlertClass = AlertClassNameMappings[notification.type]

    return (<div> { 
            notification.status ? <div className={`alert ${AlertClass}`}  role="alert">
            {notification.message} 
          </div> : ''
        }
        </div>        
    )    
}

const matchStateToProps= (state:any)=>{
    return {notification: state.common.notification}
}


export default connect(matchStateToProps, null)(NotificationComponent)