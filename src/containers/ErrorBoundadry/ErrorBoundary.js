import React , {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        console.log(error, 'error occured in error boundary')
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {        
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div className="jumbotron">
        <h1 className="display-4">Something went wrong</h1>
        <p className="lead">Error on this page.</p>
      </div>      
      }  
      return this.props.children; 
    }
  }
  