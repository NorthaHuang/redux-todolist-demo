import styled from 'styled-components';
import { gap } from '../../styles/styleVariables';

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  button {
    &:not(:last-of-type) {
      margin-right: ${gap.button};
    }
  }
`;

export default StyledWrapper;
