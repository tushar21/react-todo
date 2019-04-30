import * as React from "react"
import { connect } from 'react-redux'
import './spinner.css'

interface SpinnerProps{
    loading: boolean;
}

class SpinnerLoader extends React.Component<SpinnerProps>{

    constructor(props:SpinnerProps){
        super(props);
    }
    
    render(){
        const {loading, children} = this.props;
        return ( 
            <div>{loading ? <div className="d-flex justify-content-center" id="spinner"> <div className="spinner-border" role="status"> <span className="sr-only">Loading...</span>
            </div> </div> : children}</div>            
        )
    }    
}


const mapStateToProps = (state:any)=>{
    return {loading: state.users.loading}
}
export default connect(mapStateToProps, null)(SpinnerLoader)


