const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  error: null,
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
        case 'LOADING_UI':
        return {
            ...state,
            loading: true,
        };
    case 'UNLOADING_UI':
        return {
        ...state,
        loading: false
    };

    case 'SET_ERRORS':
        return {
            ...state,
            loading: false,
            error: action.error
        };
    case 'CLEAR_ERRORS':
        return {
            ...state,
            loading: false,
            error: null
        };
    case 'UNSET_AUTHENTICATED':
        return {
            ...state,
            isAuthenticated: false
        };
    default:
      return state;
  }
};
