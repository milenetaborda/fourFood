import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 20.5rem;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
  background: #b8b8b8;
  border-radius: 4px;
  }

a {
  margin-right: 15px;
  padding: 1rem 0.5rem;

  :hover {
    /* Rever isso */
  background-color: ${(props : any)=> props.selected ? "var(--lipstick)" : "black"}
  }
}


`;
