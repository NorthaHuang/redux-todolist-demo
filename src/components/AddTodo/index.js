import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

import { addTodo } from '../../store/actions';

const AddTodo = ({ addTodo }) => {
  const inputRef = useRef();

  /** Initialization */
  useEffect(() => {
    inputRef.current.focus(); // 預設 focus 在 input 上
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitTodo = evt => {
    evt.preventDefault(); // 避免預設 submit 事件造成頁面重整

    const input = inputRef.current;
    addTodo(input.value);

    // input 復原
    input.value = '';
    input.focus();
  };

  return (
    <StyledWrapper onSubmit={submitTodo}>
      <input type="text" placeholder="Write some message..." ref={inputRef} />
      <button type="submit">Add Todo</button>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todoMessage => {
    if (todoMessage === '') return; // Validate message
    dispatch(addTodo(todoMessage));
  },
});

export default connect(null, mapDispatchToProps)(AddTodo);
