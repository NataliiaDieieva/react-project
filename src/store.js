// outsource dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

// local dependencies
import reducers from './reducers'
import initial from './sagas'

const saga = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(saga));

saga.run(initial);

