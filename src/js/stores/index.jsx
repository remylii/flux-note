import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';
import { addItem } from '../actions/SampleAction';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,    // lets us dispatch() functions
  loggerMiddleware    // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
store.dispatch( addItem('exec from store') );

export default store;
