/**
 * rootReducer
 */
import { createReducer, combineReducers} from 'redux-immutablejs'

const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const reducers = keys.reduce((memo, key) => {
  memo[key.match(/([^\/]+)\.js$/)[1]] = context(key).default;
  return memo;
}, {});

/**
 * [name description]
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
function name(state = '', action) {
	return state;
}

/**
 * [rootReducer description]
 * @type {[type]}
 */
const rootReducer = combineReducers(reducers);

export default rootReducer;