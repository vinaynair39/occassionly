import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetEvents } from './actions/events';
import 'normalize.css/normalize.css';
import 'animate.css';
import 'react-dates/lib/css/_datepicker.css';
import 'rc-time-picker/assets/index.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetEvents()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

serviceWorker.unregister();
