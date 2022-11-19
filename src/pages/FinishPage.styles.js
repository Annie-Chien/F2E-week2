import styled from 'styled-components';

export const FinishArea = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;

  & > div {
    width: 70%;
    height: 100%;
    margin: 3rem auto;
    padding-block: 2rem;
    background-color: gray;
    overflow: scroll;
  }

  img {
    width: 80%;
    margin: auto;
  }
`;
