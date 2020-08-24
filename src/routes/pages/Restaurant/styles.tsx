import styled from 'styled-components';

export const Container = styled.div`

  section {
    width: 20.5rem;
    color:  #b8b8b8;
    margin: 0.5rem 1rem;

    img {
      width: 20.5rem;
  height: 7.5rem;
  object-fit: contain;
    }

    h2 {
      color: var(--lipstick);
    }

  }

  ul {
    margin: 0.5rem 1rem;
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
`
