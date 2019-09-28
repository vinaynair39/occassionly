import moment from 'moment';

const defaultFiltersState = {
    text: "",
    sortBy: "likes", //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  
  const filterReducer = (state = defaultFiltersState, action) => {
    switch (action.type) {
      case "ADD_FILTER":
        return {
          ...state,
          text: action.text
        };
      case "SET_START_DATE":
        return {
          ...state,
          startDate: action.startDate
        };
      case "SET_END_DATE":
        return {
          ...state,
          endDate: action.endDate
        };
      case "SORT_BY_LIKES":
          return {
            ...state,
            sortBy: 'likes'
        };
      case "SORT_BY_DATE":
        return {
          ...state,
          sortBy: 'date'
        };
  
      default:
        return state;
    }
  };

  export default filterReducer;