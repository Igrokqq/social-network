import {
  combineReducers,
  createStore,
  Store
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

import authReducer from './Auth';

const reducers = combineReducers({
  authReducer
});

const store: Store = createStore(reducers, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;
