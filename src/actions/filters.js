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
  
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
  });
  
  export const sortByDate = () => ({
    type: "SORT_BY_DATE",
  });
  