import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 142rem;
  height: 65rem;
  margin: auto;
  padding: 3rem;
  border-radius: 2rem;
  background-color: var(--clr-white);
  box-shadow: inset 0px 2px 4px rgba(135, 135, 135, 0.35),
    inset 0px 5px 8px rgba(215, 215, 215, 0.3),
    inset 0px -2px 4px rgba(135, 135, 135, 0.65),
    inset 0px -6px 6px rgba(215, 215, 215, 0.55);
  position: relative;

  & > header {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > button {
    position: absolute;
    right: 0;
    top: 15%;
    transform: translate(50%, -50%);
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 45rem;
  margin: ${(props) => props.margin || 0} 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ImgContainer = styled.div`
  width: ${(props) => props.width + 'rem' || '100%'};
`;
