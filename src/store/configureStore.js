import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/Auth';
import eventsReducer from '../reducers/Events';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      events: eventsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
