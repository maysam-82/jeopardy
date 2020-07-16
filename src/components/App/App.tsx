import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/categories';

export interface IAppProps {
	getCategories: Function;
}

export class App extends Component<IAppProps, {}> {
	componentDidMount() {
		this.props.getCategories();
	}
	render() {
		return <div className="container">App</div>;
	}
}

export default connect(null, { getCategories })(App);
