import { getAllEvents } from '../services/EventService';

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
});

export const startSetEvents = () => {
  return async (dispatch) => {
    const events = await getAllEvents();
    dispatch(setEvents(events));
    return events;
  };
};

export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  event
});

export const editEvent = (id, update) => ({
  type: 'EDIT_EVENT',
  id,
  update
});

export const removeEvent = (id) => ({
  type: 'REMOVE_EVENT',
  id
});

