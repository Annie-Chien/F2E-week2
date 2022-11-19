import styled from 'styled-components';
import { highlightText } from '../../utils/globalStyle';

export const SAlert = styled.div`
  width: 33%;
  padding: 0.5rem 2rem;
  margin: auto;
  background-color: ${(props) =>
    props.type === 'danger' ? 'var(--clr-danger)' : 'var(--clr-primary-dark)'};
  border: 2px solid var(--clr-primary);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 100%;
  transform: translateY(50%);
  left: 0;
  right: 0;

  & > p {
    ${highlightText}
    flex: 2;
    color: var(--clr-white);
  }
`;
