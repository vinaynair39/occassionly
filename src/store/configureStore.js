import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/Auth';
import eventsReducer from '../reducers/Events';
import filterReducer from '../reducers/Filters';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      events: eventsReducer,
      filters: filterReducer,

    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
