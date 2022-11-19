import styled from 'styled-components';

export const SSearchBar = styled.div`
  width: 40%;
  max-width: 40rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-gray-20);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > label {
    width: 3rem;
  }
`;

export const SSearchInput = styled.input`
  width: 90%;
  font-family: inherit;
  font-size: inherit;
  border: none;

  &::placeholder {
    color: var(--clr-gray-20);
  }

  &:focus {
    outline: none;
  }
`;
