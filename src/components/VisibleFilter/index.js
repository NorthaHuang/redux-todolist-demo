import React from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

import { setVisibleFilter } from '../../store/actions';
import { VisibleFilterOptions } from '../../store/actions/actionTypes';

const VisibleFilter = ({ setVisibleFilter }) => {
  return (
    <StyledWrapper>
      <button onClick={() => setVisibleFilter(VisibleFilterOptions.SHOW_ALL)}>
        Show All
      </button>
      <button onClick={() => setVisibleFilter(VisibleFilterOptions.COMPLETED)}>
        Completed
      </button>
      <button onClick={() => setVisibleFilter(VisibleFilterOptions.INCOMPLETE)}>
        Incomplete
      </button>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  setVisibleFilter: visibleFilterOptions =>
    dispatch(setVisibleFilter(visibleFilterOptions)),
});

export default connect(null, mapDispatchToProps)(VisibleFilter);
