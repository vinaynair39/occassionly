const eventsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return action.events;
        case 'ADD_EVENT':
            return [...state, action.event];
        case 'LIKE_EVENT':
            const index1 = state.findIndex(event => event.id === action.id);
            state[index1].likeCount += 1;
            return state
        case 'UNLIKE_EVENT':
            let index2 = state.findIndex(event => event.id === action.id);
            state[index2].likeCount -= 1;
            return state
        default:
            return state;
    }
}

export default eventsReducer;