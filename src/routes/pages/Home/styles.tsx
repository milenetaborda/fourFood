import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  input {
    width: 20.5rem;
    height: 3.5rem;
    border-radius: 2px;
    margin: 0.5rem 1rem;
    border: solid 1px #b8b8b8;
  }

  section {
    width: 20.5rem;
    height: 11.75rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 0.5rem 1rem;
    font-family: 'Roboto', sans-serif;

    img {
      width: 20.5rem;
      height: 7.5rem;
      object-fit: contain;
    }

    strong {
      display: block;
      margin: 0.75rem 1rem;
      color: var(--lipstick);
    }

    span {
      margin: 0.75rem 1rem;
    }
  }
`;
