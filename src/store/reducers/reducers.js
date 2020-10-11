import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBLE_FILTER,
  VisibleFilterOptions,
} from '../actions/actionTypes';

/** visibleFilter */
export const visibleFilter = (state = VisibleFilterOptions.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.visibleFilterOptions;
    default:
      return state;
  }
};

/** todos */
export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          todoMessage: action.todoMessage,
          isCompleted: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
