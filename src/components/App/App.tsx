import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Header from '../Header';

const App = () => {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category" component={Category} />
			</Switch>
		</div>
	);
};

export default App;
