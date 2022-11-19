import styled, { css } from 'styled-components';

export const SDivider = styled.div`
  background-color: var(--clr-primary);

  ${(props) =>
    props.variant === 'vertical'
      ? css`
          width: 2px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 2px;
        `}
`;
