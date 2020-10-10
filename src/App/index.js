import React from 'react';
import StyledWrapper from './styled';

import GlobalStyle from '../styles/GlobalStyle';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import VisibleFilter from '../components/VisibleFilter';

const App = () => {
  return (
    <StyledWrapper>
      <GlobalStyle />

      <VisibleFilter />
      <AddTodo />
      <TodoList />
    </StyledWrapper>
  );
};

export default App;
