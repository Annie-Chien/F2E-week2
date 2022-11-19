import styled from 'styled-components';

export const SProgressBar = styled.div`
  width: 47rem;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const SStep = styled.div`
  font-size: var(--fz-cap);
  color: ${(props) =>
    props.status === 'active' ? 'var(--clr-success)' : 'var(--clr-gray-40)'};
  text-align: center;
`;

export const Dot = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.5rem auto;
  background-color: ${(props) =>
    props.status === 'done' ? 'var(--clr-success)' : 'var(--clr-black)'};
  border: 2px solid
    ${(props) => (props.status === 'done' ? 'none' : 'currentColor')};
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.status === 'active' ? '0 0 0 3px rgba(183, 236, 93, 0.5)' : 'none'};
  position: relative;
  z-index: 10;

  &::after {
    content: '';
    width: 20rem;
    height: 0.2rem;
    background-color: ${(props) => {
      if (props.status === 'done') {
        return 'var(--clr-success)';
      } else if (props.index === 2) {
        return 'transparent';
      } else {
        return 'var(--clr-gray-40)';
      }
    }};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    margin: auto;
    z-index: 0;
  }
`;
