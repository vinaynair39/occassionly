const initialState = {
    checkLike: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_LIKE_EVENT':
        return {
            ...state,
            checkLike: action.condition,
        }
        default:
            return state;
    }
}

export default userReducer;