import styled from 'styled-components';
import { highlightText } from '../utils/globalStyle';

export const SEditArea = styled.div`
  padding: 0 1rem;
  height: 90%;
  display: flex;
  gap: 1rem;
`;

export const SEditTools = styled.aside`
  margin-block: 1rem;
  flex: 1 0 28%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ToolContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const SToolBtn = styled.div`
  width: fit-content;
  text-align: center;
  cursor: pointer;

  & > span {
    font-size: var(--fz-cap);
    display: block;
  }
`;

export const SignCotainer = styled.div`
  height: 100%;
  padding: 1rem;
  background-color: var(--clr-secondary-light);
  border-radius: 2rem;
  overflow-y: scroll;
  text-align: center;
`;

export const SSign = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  transition: background-color 0.3s;
  position: relative;

  & + & {
    margin-block: 1rem;
  }

  &:hover {
    background-color: rgba(183, 236, 93, 0.7);
  }

  & > img:first-child {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`;

export const SPage = styled.div`
  padding-block: 2rem;
  background-color: ${(props) =>
    props.active ? 'rgba(183, 236, 93, 0.3)' : 'var(--clr-gray-10)'};
  border-radius: 2rem;
  position: relative;
  display: grid;
  place-content: center;
  border: 2px solid transparent;

  &:hover {
    background: rgba(183, 236, 93, 0.3);
    border: 2px solid var(--clr-success);
  }

  &::before {
    ${highlightText}
    content: attr(data-key);
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  & + & {
    margin-block: 1.5rem;
  }
  canvas {
    width: 100px;
    height: 120px;
  }
`;

export const SEditScreen = styled.div`
  width: 70%;
  display: flex;
  place-content: center;
`;

export const CanvasContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 1rem;
  overflow: scroll;
  background-color: var(--clr-gray-30);
  display: flex;
  justify-content: center;
`;
