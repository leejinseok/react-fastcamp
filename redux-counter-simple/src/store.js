import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import loggerMiddleware from './lib/loggerMiddleware';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(modules,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(logger, ReduxThunk));

export default store;