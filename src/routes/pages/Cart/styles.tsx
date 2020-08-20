import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1rem;
  width: 50em;
  border: 1px solid #eeeeee;

  h1 {
    text-align: center;
    font-size: 1rem;
  }

    div {
      padding: 1rem ;
    }

    aside {
      width: 100%;
      height: 100%;
      background-color: #eeeeee;
      line-height: 1.5;
      padding: 0.5rem 1rem ;
      margin-bottom: 1rem;

      span {
        color: #b8b8b8;
      }
    }

    h2 {
      padding: 0 1rem ;
      font-size: 1.2rem;
    }

    > p{
      text-align: center;
      padding: 1vh 5vw;
    }

    > p:nth-last-child(2) {
      text-align: left;
      padding: 1vh 1rem;
    }

  @media screen and (max-width: 840px) {
      width: 90vw;
  };
`;
