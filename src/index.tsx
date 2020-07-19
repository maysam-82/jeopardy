import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import App from './components/App';
import Root from './Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Root>
		<Router history={history}>
			<App />
		</Router>
	</Root>,
	document.querySelector('#root')
);
