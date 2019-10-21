const initialState = {
    checkLike: true,
    user: {},
    notifications: [],
    follows: {
        following: [''],
        followers: ['']
    },
    userHandle: '',
    userEvents: []
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
        case 'GET_USER_EVENTS':
            return {
                ...state,
                userEvents: action.events.map(event => event)
            };
        case 'ADD_USER_DETAILS':
            return {
                ...state,
                user: {
                    ...state.user,
                    // bio: action.details.bio,
                    // website: action.details.website,
                    college: action.details.college,
                    year: action.details.year,
                    contact_no: action.details.contact_no,
                }
            }
        case 'ADD_USER_IMAGE':
            return {
                ...state,
                user: {
                    ...state.user,
                    imageUrl: action.imageUrl
                }
            }
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