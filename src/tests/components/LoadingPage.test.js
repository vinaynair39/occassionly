import React from 'react';
import ReactDOM from 'react-dom';
import LoadingPage from '../../components/LoadingPage';

test('renders loading indicator', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingPage />, div);
  const img = div.querySelector('img');
  expect(img).not.toBeNull();
});
