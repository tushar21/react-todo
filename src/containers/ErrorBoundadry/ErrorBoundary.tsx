import * as React from 'react';

interface ErrorBoundaryState{
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props:any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch() {        
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
  