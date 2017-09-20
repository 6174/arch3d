/**
 * app root
 */
// import 'babel-polyfill';
import "regenerator-runtime/runtime";

import React from 'react';
import {render} from 'react-dom';

// root component
import App from './components/App';

// redux
import { Provider } from 'react-redux';
import store from './store';

/**
 * render to dom
 * @type {Object}
 */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('AppRoot')
);

export default App;
