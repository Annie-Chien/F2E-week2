import styled from 'styled-components';

export const SOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: grid;
  place-content: center;
`;

export const SModal = styled.div`
  width: 53rem;
  height: fit-content;
  min-height: 35rem;
  padding: 2.4rem 4.2rem;
  text-align: center;
  background-color: var(--clr-white);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2),
    inset 0px 2px 5px rgba(135, 135, 135, 0.2),
    inset 0px 3px 10px rgba(215, 215, 215, 0.2),
    inset 0px -1px 4px rgba(135, 135, 135, 0.6),
    inset 0px -6px 6px rgba(215, 215, 215, 0.4);
  border-radius: 4rem;
`;

export const SModalHeader = styled.header`
  margin-bottom: 1.6rem;
`;

export const SModalContentContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;
