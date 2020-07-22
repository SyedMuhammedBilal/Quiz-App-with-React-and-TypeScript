// @ts-ignore
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p{
    color: #fff;
  }
  .score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  .btn{
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    font-size: 1rem;
    margin: 20px 0;
    padding: 0 40px;
  }
  .next{
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    font-size: 1rem;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start{
    max-width: 200px;
  }
`