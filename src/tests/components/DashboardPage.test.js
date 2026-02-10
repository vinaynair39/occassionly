import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import DashboardPage from '../../components/DashboardPage';
import configureStore from '../../store/configureStore';
import { setEvents } from '../../actions/events';
import { getAllEvents } from '../../services/EventService';

test('renders dashboard title', async () => {
  const div = document.createElement('div');
  const store = configureStore();
  const events = await getAllEvents();
  store.dispatch(setEvents(events));

  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    </Provider>,
    div
  );

  expect(div.textContent).toContain('CampusFlow Events');
});
