import styled from 'styled-components';
import { highlightText } from '../../../utils/globalStyle';
export const SButton = styled.button`
  ${highlightText}
  width: ${(props) => props.width}rem;
  font-family: inherit;
  color: var(--clr-secondary);
  border: none;
  border-radius: 5rem;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--clr-primary);
  }
`;

export const OutlinedButton = styled(SButton)`
  padding: 0.8rem 2.8rem;
  color: var(--clr-gray-50);
  border: 2px solid var(--clr-gray-50);

  &:hover {
    background-color: var(--clr-gray-50);
  }
`;

export const PrimaryButton = styled(SButton)`
  padding: 0.8rem 2.8rem;
  color: var(--clr-primary);
  border: 2px solid var(--clr-primary);
  background-color: var(--clr-secondary);

  &:hover {
    color: var(--clr-secondary);
    background-color: var(--clr-primary);
  }

  &:disabled {
    cursor: default;
    color: var(--clr-gray-50);
    background-color: var(--clr-gray-20);
    border: 2px solid var(--clr-gray-30);
  }
`;
