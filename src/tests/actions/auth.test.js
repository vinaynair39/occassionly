import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const action = login();
  expect(action).toEqual({
    type: 'LOGIN'
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
