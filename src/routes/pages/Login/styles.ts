import styled from 'styled-components';
import { darken } from 'polished';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5vw;

  img {
    margin: 88px 128px 0;
    width: 110px;
  }

  span {
    margin: 12px auto;

    strong {
      margin: 0 5px;
      cursor: pointer;
      color: var(--lipstick);
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;

  h1 {
    margin: 12px 32px 0;
    font-size: 16px;
    font-family: Roboto;
    padding: 12px;
    font-weight: 400;
  }

  input {
    width: 40em;
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
    width: 40em;
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

  @media screen and (max-width: 670px) {
    input,
    button {
      width: 90vw;
    }
  }
`;
