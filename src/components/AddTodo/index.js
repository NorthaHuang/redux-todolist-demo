import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

import { addTodo } from '../../store/actions';

const AddTodo = ({ addTodo }) => {
  const inputRef = useRef();

  const onClick = evt => {
    evt.preventDefault();
    const input = inputRef.current;
    addTodo(input.value);
    input.value = '';
    input.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper onSubmit={onClick}>
      <input type="text" placeholder="Write some message..." ref={inputRef} />
      <button type="submit">Add Todo</button>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todoMessage => {
    if (todoMessage === '') {
      return;
    }
    dispatch(addTodo(todoMessage));
  },
});

export default connect(null, mapDispatchToProps)(AddTodo);
