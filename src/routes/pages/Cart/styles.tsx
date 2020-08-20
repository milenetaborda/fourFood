import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  font-size: 1rem;
  width: 50em;
  border: 1px solid #eeeeee;
  overflow: hidden;

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


.box {
   max-width: 600px;
   margin: 50px auto;
}

ul {
   list-style-type: none;
   position: relative;

    li {
      width: 100%;
      display: block;
      position: relative;

      input[type=radio] {
      position: absolute;
      visibility: hidden;
      }

      label {
      display: block;
      position: relative;
      padding: 1em 3em;
      font-size: 1em;
      cursor:pointer;
      z-index: 5;
      transition: all .25s linear;
    }

   .check {
    display: block;
    position: absolute;
    border: 4px solid #eee;
    border-radius: 100%;
    height: 5px;
    width: 5px;
    top: calc(50% - 18px);
    z-index: 5;
    transition: border .25s linear;
    cursor:pointer;
    };
  }
}

/* ul li:hover label {
   color: #fff;
} */

ul li:hover .check {
   border: 4px solid #fff;
}
ul li .check::before {
   content: '';
   display: block;
   position: absolute;
   border-radius: 100%;
   height: 16px;
   width: 16px;
   top: calc(50% - 8px);
   left: calc(50% - 8px);
   margin: auto;
   transition: background .25s linear;
}
input[type=radio]:checked ~ .check {
   border: 4px solid var(--lipstick);
}
input[type=radio]:checked ~ .check::before {
   background: var(--lipstick);
}
input[type=radio]:checked ~ label {
   color: var(--lipstick);
}

button {
    margin-left: 14em;
    width: 23em;
    height: 42px;
    border-radius: 2px;
    background: var(--lipstick);
    border: none;
    font-weight: 500;

    &:hover {
      background: ${darken(0.03, '#e8222e')};
    }
  }

  @media screen and (max-width: 840px) {
      width: 90vw;

      button {
       width: 40vw;
       margin-left: 25vw;
      }
  };

`;
