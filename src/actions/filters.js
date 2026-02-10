export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setCategoryFilter = (category = 'All') => ({
  type: 'SET_CATEGORY_FILTER',
  category
});

export const setCostTypeFilter = (costType = 'All') => ({
  type: 'SET_COST_FILTER',
  costType
});

export const setTimeRangeFilter = (timeRange = 'all') => ({
  type: 'SET_TIME_RANGE_FILTER',
  timeRange
});
