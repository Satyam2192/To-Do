import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  MARK_ALL_COMPLETED,
} from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});


export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});


export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});


