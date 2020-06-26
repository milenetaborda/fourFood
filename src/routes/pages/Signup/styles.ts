import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 24px 128px 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 12px 32px 0;
    font-size: 16px;
    font-family: Roboto;
    padding: 12px;
    font-weight: 400;
  }

  input {
    width: 328px;
    height: 56px;
    padding: 19px 48px 19px 16px;
    margin: 8px auto;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    letter-spacing: -0.39px;

    ::-webkit-input-placeholder {
      color: #d0d0d0;
    }
  }

  button {
    width: 328px;
    height: 42px;
    border-radius: 2px;
    margin: 8px auto 12px;
    background: var(--lipstick);
    border: none;
    font-weight: 500;

    &:hover {
      background: ${darken(0.03, '#e8222e')};
    }
  }
`;
