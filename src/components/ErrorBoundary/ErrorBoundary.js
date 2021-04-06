import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

class ErrorBoundary extends Component {
	/**
	 * @type {{errorInfo: boolean, hasError: boolean, error: boolean}}
	 */
	state = {
		error: false,
		errorInfo: false,
		hasError: false
	};

	/**
	 * @param props
	 * @param state
	 * @returns {*}
	 */
	static getDerivedStateFromProps(props, state) {
		console.log('[ErrorBoundary.js] getDerivedStateFromProps');
		return state;
	};

	/**
	 * @param nextProps
	 * @param nextState
	 * @returns {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[ErrorBoundary.js] shouldComponentUpdate');
		return true;
	};

	/**
	 * @param prevProps
	 * @param prevState
	 */
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[ErrorBoundary.js] getSnapshotBeforeUpdate');
	};

	/**
	 * @param prevProps
	 * @param prevState
	 * @param snapshot
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[ErrorBoundary.js] componentDidUpdate');
	};

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
	};

	componentWillUnmount() {
		console.log('[ErrorBoundary.js] componentWillUnmount');
	};

	/**
	 * @returns {JSX.Element|React.ReactNode}
	 */
	render() {
		if (this.state.hasError) {
			return (
				<Aux>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br/>
						{this.state.errorInfo.componentStack}
					</details>
				</Aux>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
