import styled, { css } from 'styled-components';

export const FileListContainer = styled.div`
  height: 90%;
`;

export const SFileListHeader = styled.header`
  display: flex;
  align-items: center;

  & > span:first-child {
    margin-left: 6rem;
  }

  & > span {
    font-size: var(--fz-cap);
    color: var(--clr-secondary);
  }
`;

export const BtnsContainer = styled.div`
  margin-left: auto;
`;

export const SFileList = styled.ul`
  height: 85%;
  display: grid;
  align-items: center;
  overflow: scroll;
  gap: 1rem;

  ${(props) =>
    props.isGrid
      ? css`
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 20rem;
        `
      : css`
          grid-template-columns: 1fr;
          grid-auto-rows: 8rem;
        `}
`;
