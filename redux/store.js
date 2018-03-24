import { createStore, applyMiddleware } from 'redux';

import { middleware as thunklessMiddleware } from './middleware/thunkless';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunklessMiddleware);
const store = createStore(rootReducer, middleware);

export default store;
