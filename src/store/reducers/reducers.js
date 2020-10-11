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
const initialTodos = [
  {
    id: 1,
    todoMessage: 'Learn Javascript.',
    isCompleted: true,
  },
  {
    id: 2,
    todoMessage: 'Learn React.',
    isCompleted: true,
  },
  {
    id: 3,
    todoMessage: 'Learn Redux.',
    isCompleted: false,
  },
  {
    id: 4,
    todoMessage: 'Learn Redux-Saga.',
    isCompleted: false,
  },
];

export const todos = (state = initialTodos, action) => {
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
