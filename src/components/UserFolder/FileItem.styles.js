import styled, { css } from 'styled-components';

export const SFileItem = styled.li`
  padding: 2rem 1rem;
  border: 4px solid var(--clr-secondary-tint);
  border-radius: 2rem;
  box-shadow: 0px 1px 5px rgba(179, 179, 179, 0.4),
    0px 2px 8px rgba(215, 215, 215, 0.4),
    inset 0px 2px 5px rgba(215, 215, 215, 0.16),
    inset 0px -2px 3px rgba(179, 179, 179, 0.6),
    inset 0px -6px 6px rgba(215, 215, 215, 0.2);
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  /* transition: all 0.3s; */

  &:hover {
    border: 4px solid var(--clr-primary-tint);
    background: var(--gradient-primary);
    box-shadow: none;
  }

  ${(props) =>
    props.isGrid
      ? css`
          flex-direction: column;
          gap: 0.5rem;
        `
      : css`
          flex-direction: row;
          gap: 1rem;
        `}
`;

export const SFileDate = styled.span`
  margin-right: 1rem;
`;

export const SFileName = styled.span`
  flex: 2;
`;

export const SFileBtns = styled.div`
  margin-right: 0;
`;
