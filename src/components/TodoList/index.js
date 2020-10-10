import React from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

import { toggleTodo } from '../../store/actions';
import { VisibleFilterOptions } from '../../store/actions/actionTypes';

const TodoList = ({ visibleFilter, todos, toggleTodo }) => {
  return (
    <StyledWrapper>
      {todos
        .filter(todo => {
          switch (visibleFilter) {
            case VisibleFilterOptions.COMPLETED:
              return todo.isCompleted;
            case VisibleFilterOptions.INCOMPLETE:
              return !todo.isCompleted;
            default:
              return true;
          }
        })
        .map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.todoMessage}
          </li>
        ))}
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  visibleFilter: state.visibleFilter,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: todoId => dispatch(toggleTodo(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
