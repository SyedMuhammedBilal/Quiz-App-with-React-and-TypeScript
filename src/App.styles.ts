import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background-color: navy;
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
  h1{
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start{
    max-width: 200px;
  }
`