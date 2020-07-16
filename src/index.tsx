import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={appStore}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
