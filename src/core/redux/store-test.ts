import {
  applyMiddleware, createStore
} from 'redux';
import reducers from './root.reducer';
import thunkMiddleware from 'redux-thunk';

const storeTest = () => {
  return createStore(reducers, applyMiddleware(thunkMiddleware));
};

export default storeTest;
