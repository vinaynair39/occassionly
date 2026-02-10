import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';

test('renders not found message', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>,
    div
  );
  expect(div.textContent.toLowerCase()).toContain('404');
});
