import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 15%;
  right: 100%;
`;

export const Tab = styled.li`
  width: max-content;
  padding: 1.2rem;
  background-color: ${(props) =>
    props.active ? 'var(--clr-white)' : 'var(--clr-gray-60)'};
  border: 2px solid
    ${(props) => (props.active ? 'var(--clr-primary)' : 'var(--clr-gray-70)')};
  border-right: none;
  border-radius: 100px 0px 0px 100px;
  box-shadow: inset -2px 0px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
