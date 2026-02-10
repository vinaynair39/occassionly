import React from 'react';
import { connect } from 'react-redux';
import {
  setCategoryFilter,
  setCostTypeFilter,
  setTextFilter,
  setTimeRangeFilter
} from '../actions/filters';
import selectEvents from '../selectors/events';
import A11yAnnouncer from './A11yAnnouncer';

const EventFilters = ({ filters, categories, dispatch, eventCount }) => {
  return (
    <section className="input-group" aria-label="Event search and filters">
      <div className="input-group__item">
        <label className="visually-hidden" htmlFor="search-events">Search events</label>
        <input
          id="search-events"
          type="text"
          placeholder="Search events by title or description"
          value={filters.text}
          onChange={(e) => dispatch(setTextFilter(e.target.value))}
        />
      </div>
      <div className="input-group__item">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={filters.category}
          onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group__item">
        <label htmlFor="cost-filter">Cost</label>
        <select
          id="cost-filter"
          value={filters.costType}
          onChange={(e) => dispatch(setCostTypeFilter(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
      <div className="input-group__item">
        <label htmlFor="time-filter">When</label>
        <select
          id="time-filter"
          value={filters.timeRange}
          onChange={(e) => dispatch(setTimeRangeFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
        </select>
      </div>
      <div className="input-group__item">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            dispatch(setTextFilter(''));
            dispatch(setCategoryFilter('All'));
            dispatch(setCostTypeFilter('All'));
            dispatch(setTimeRangeFilter('all'));
          }}
        >
          Clear filters
        </button>
      </div>
      <div className="input-group__item" role="status" aria-live="polite">
        Found {eventCount} {eventCount === 1 ? 'event' : 'events'}
      </div>
      <A11yAnnouncer message={`Found ${eventCount} ${eventCount === 1 ? 'event' : 'events'}`} />
    </section>
  );
};

const mapStateToProps = (state) => {
  const events = selectEvents(state.events, state.filters);
  const categories = Array.from(new Set(state.events.map((event) => event.category))).sort();
  return {
    filters: state.filters,
    categories,
    eventCount: events.length
  };
};

export default connect(mapStateToProps)(EventFilters);
