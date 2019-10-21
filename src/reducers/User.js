const initialState = {
    checkLike: true,
    user:{},
    notifications: [],
    follows: {
        following: [''],
        followers: ['']
    },
    userHandle: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_LIKE_EVENT':
            return {
                ...state,
                checkLike: action.condition,
            }
        case 'GET_USERHANDLE':
            return {
                ...state,
                userHandle: action.userHandle
            };
        case 'GET_AUTHENTICATED_USER':
            return {
                ...state,
                user: action.user,
                notifications: action.notifications,
                follows: action.follows
            }
        default:
            return state;
    }
}

export default userReducer;