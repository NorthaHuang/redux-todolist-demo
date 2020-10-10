import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from './actionTypes';

export const addTodo = todoMessage => ({
  type: ADD_TODO,
  todoMessage,
});

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId,
});

export const setVisibleFilter = visibleFilterOptions => ({
  type: SET_VISIBLE_FILTER,
  visibleFilterOptions,
});
