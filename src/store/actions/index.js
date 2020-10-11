import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from './actionTypes';

/** Action Creator */
//  addTodo
export const addTodo = todoMessage => ({
  type: ADD_TODO,
  todoMessage,
});

// toggleTodo
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId,
});

// setVisibleFilter
export const setVisibleFilter = visibleFilterOptions => ({
  type: SET_VISIBLE_FILTER,
  visibleFilterOptions,
});
