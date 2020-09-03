import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > h1:nth-child(1) {
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
  }

  section {
    width: 100%;
    color: #b8b8b8;
    margin: 1rem 0;

    img {
      text-align: center;
      border-radius: 2px;
      width: 90%;
      height: 7.5rem;
    }

    h2 {
      margin-top: 0.5rem;
      color: var(--lipstick);
    }

    h2,
    p {
      line-height: 25px;
    }
  }

  ul {
    margin: 1rem 0;

    li {
      display: flex;
      width: 20.5rem;
      height: 7rem;
      border-radius: 8px;
      border: solid 1px #b8b8b8;

      img {
        width: 6rem;
        height: 100%;
        object-fit: contain;
      }

      div {
        margin: 1.125rem 1rem;
        display: flex;
        flex-direction: column;

        p {
          color: var(--lipstick);
        }

        span {
          color: #b8b8b8;
        }

        footer {
          display: flex;
          justify-content: space-between;

          button {
            padding: 10px;
            background: none;
            border-top-left-radius: 40%;
            border-bottom-right-radius: 40%;
          }
        }
      }
    }
  }
`;
