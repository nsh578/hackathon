import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkless from './middleware/thunkless';
import rootReducer, { initialState } from './reducers';

const middleware = applyMiddleware(thunkless.middleware);
const enhancers = __DEV__ ? composeWithDevTools(middleware) : middleware;
const store = createStore(rootReducer, initialState, enhancers);

export default store;
