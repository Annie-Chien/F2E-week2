import styled from 'styled-components';
import bgImg from '../../../assets/img/bg_decorate.svg';

export const MainContainer = styled.main`
  min-height: calc(100vh - 79px); // 待調整
  padding: 6rem 0 0;
  background: var(--clr-secondary-dark) url(${bgImg}) bottom no-repeat;
`;
