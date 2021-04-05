import React, { Component } from 'react';

class ErrorBoundary extends Component {
  /**
   * @type {{errorInfo: boolean, hasError: boolean, error: boolean}}
   */
  state = {
    error: false,
    errorInfo: false,
    hasError: false
  }

  /**
   * @param error
   * @param errorInfo
   */
  componentDidCatch = (error, errorInfo) => {
    this.setState({
      error,
      errorInfo,
      hasError: true
    });
  }

  /**
   * @returns {JSX.Element|React.ReactNode}
   */
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
