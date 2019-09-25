const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          ...state,
          isAuthenticated: true,
      };
    case 'LOGOUT':
        return {
            isAuthenticated:false
        };
    default:
      return state;
  }
};
