import authReducer from '../../reducers/auth';

test('should set authenticated flag for login', () => {
  const action = {
    type: 'LOGIN'
  };
  const state = authReducer(undefined, action);
  expect(state.isAuthenticated).toBe(true);
});

test('should clear authentication for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ isAuthenticated: true }, action);
  expect(state.isAuthenticated).toBe(false);
});
