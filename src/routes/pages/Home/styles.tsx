import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
	width: 4px;
  }

  ::-webkit-scrollbar-thumb {
  background: #b8b8b8;
  border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
  background: #eee;
  }

  h1 {
    font-size: 1.5rem;
  }

  input {
    width: 90%;
    height: 3.5rem;
    border-radius: 2px;
    margin: 0.5rem 1rem;
    border: solid 1px #b8b8b8;
  }

  ul {
    width: 90%;
    height: 55vh;
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(21.5rem, 1fr) );
    grid-gap: 10px;

    li {
      border-radius: 8px;
      border: solid 1px #b8b8b8;
      margin: 0.5rem 0;
      list-style-type: none;
      cursor: pointer;

      img {
      border-radius: 8px;
      width: 100%;
      height: 7.5rem;
      background-size: contain;
      background-size: 100%;
      }

      strong {
      display: block;
      margin: 0.75rem 1rem;
      color: var(--lipstick);
      }

     span {
      margin: 0.75rem 1rem;
      color: #b8b8b8;
      }
    }

  }
`;
