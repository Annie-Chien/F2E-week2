import styled from 'styled-components';

export const SUploadArea = styled.div`
  height: 85%;
  color: var(--clr-gray-40);
  margin-top: 2rem;
  border: 1px dashed currentColor;
  border-radius: 2rem;
  text-align: center;
  position: relative;
`;

// 客製化 Input（type:file）
export const SFileInput = styled.label`
  content: '選擇檔案';
  width: fit-content;
  font-size: 1.8rem;
  font-family: inherit;
  border: none;
  border-radius: 5rem;
  transition: all 0.3s ease-out;
  display: inline-block;
  padding: 0.8rem 2.8rem;
  color: var(--clr-primary);
  border: 2px solid var(--clr-primary);
  background-color: var(--clr-secondary);

  &:hover {
    color: var(--clr-secondary);
    background-color: var(--clr-primary);
  }

  & > input {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

export const Wrap = styled.div`
  margin-top: 8rem;
  & > h5 {
    color: var(--clr-secondary);
    margin-block-start: 2.5rem;
  }

  & > label {
    display: inline-block;
    margin-block: 3rem 1rem;
  }
`;

export const CanvasContainer = styled.div`
  width: fit-content;
  margin: auto;

  position: relative;

  & > button {
    position: absolute;
    bottom: 100%;
    right: -20%;
  }

  & > canvas {
    outline: 2px solid var(--clr-gray-30);
  }
`;

export const SFileNameInput = styled.div`
  width: 40rem;
  padding: 0 2.4rem;
  font-size: 1.6rem;
  display: flex;
  border: 2px solid var(--clr-secondary);
  border-radius: 5rem;

  &:focus-within {
    border: 4px solid rgba(183, 236, 93, 0.3);
  }

  &:focus-within img {
    visibility: hidden;
  }

  & > input {
    flex: 2;
    outline: none;
    border: none;
    color: var(--clr-secondary);
    font-family: inherit;
    font-size: inherit;
  }
`;
