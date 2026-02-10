import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';

test('renders CampusFlow branding', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
    div
  );

  expect(div.textContent).toContain('CampusFlow');
});
