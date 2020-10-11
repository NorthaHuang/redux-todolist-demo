import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBLE_FILTER,
  VisibleFilterOptions,
} from '../actions/actionTypes';

/** Initial State */
const initialState = {
  visibleFilter: VisibleFilterOptions.SHOW_ALL,
  todos: [
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
    {
      id: 5,
      todoMessage: 'Make money!!!',
      isCompleted: false,
    },
  ],
};

/** Root Reducer */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            todoMessage: action.todoMessage,
            isCompleted: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        }),
      };
    case SET_VISIBLE_FILTER:
      return {
        ...state,
        visibleFilter: action.visibleFilterOptions,
      };
    default:
      return state;
  }
};

export default rootReducer;
