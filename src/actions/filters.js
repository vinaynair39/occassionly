export const setTextFilter = (text = '') => ({
    type: "ADD_FILTER",
    text: text
});
  
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

export const sortByLikes = () => ({
  type: "SORT_BY_LIKES",
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
