import styled from 'styled-components';

export const SModalContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const SModalOptions = styled.div`
  align-self: stretch;
  margin-top: auto;

  & > * {
    width: 40%;
    margin-inline: 1rem;
  }
`;

export const SSignCanvas = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > canvas {
    background: var(--clr-secondary-tint);
    border: 2px solid var(--clr-gray-30);
    border-radius: 2rem;
  }
`;

export const SLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-block-end: 2rem;

  & > img {
    width: 20rem;
  }

  & > p {
    color: var(--clr-gray-40);
  }
`;

export const SWarn = styled.div`
  margin: 8rem 0;
`;

export const SConfirm = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  & > h5 {
    color: var(--clr-primary);
  }

  & > p {
    color: var(--clr-gray-40);
  }
`;
export const SNewImg = styled.div`
  margin-block-end: 2rem;
  padding-block: 2rem;
  border: 1px dashed var(--clr-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap: 1rem;
  position: relative;
`;

export const SImgInput = styled.label`
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
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

export const SNewText = styled.div`
  height: 15rem;
  margin-block-end: 2rem;

  & > textarea {
    padding: 2rem;
    width: 100%;
    height: 100%;
    border: 4px solid rgba(183, 236, 93, 0.3);
    border-radius: 20px;
    resize: none;
  }
`;
