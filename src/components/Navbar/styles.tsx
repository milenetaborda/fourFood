import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 65px;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
  background: #b8b8b8;
  border-radius: 4px;
  }
`;


export const Button = styled.button `
  margin-right: 15px;
  padding: 0.5rem 1rem 0.5rem 0;
  background: none;
  border: none;
  color:  ${(props : any ) => props.isSelected === false ? "var(--lipstick)" : "black"};
`
