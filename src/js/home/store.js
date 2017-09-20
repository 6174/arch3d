import M from 'immutable';

// redux
import { createStore, applyMiddleware} from 'redux';

// redux middlewares
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import SagaManager from './sagas/SagaManager';

// redux reducer
import rootReducer from './reducers';

// redux default store
const DefaultStoreData = M.fromJS({
    graphData: null
});

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
    rootReducer, 
    DefaultStoreData, 
    applyMiddleware(sagaMiddleware, thunkMiddleware)); //, createLogger()

// start saga
SagaManager.startSagas(sagaMiddleware);

/**
 * subscribe state change event
 */
store.subscribe(() => {
  // console.log(store.getState());
});


window.store = store;
// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
//   console.log(store.getState())
// )

// contextType: {
//  store: PropTypes.shape({
//    subscribe: PropTypes.func.isRequired,
//    dispatch: PropTypes.func.isRequired,
//    getState: PropTypes.func.isRequired
//  })
// }


export default store;