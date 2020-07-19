import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './redux/reducers';
import thunk from 'redux-thunk';
import { IStoreState } from './redux/reducers/index';
// Set default value for initialState to `{}` since the app will not use that and we only use `initialState` for testing purpose.
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

interface IRootProps {
	children: ReactNode;
	initialState?: IStoreState;
}

const Root: React.SFC<IRootProps> = ({
	children,
	initialState = {} as IStoreState,
}) => {
	// When redux is going to create an store, we can optionally provide initialState for starting app.
	const appStore = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
	return <Provider store={appStore}>{children}</Provider>;
};

export default Root;
