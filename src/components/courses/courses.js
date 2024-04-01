import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Courses = styled.div`
    display: flex;
    gap: 37px;
    flex-wrap: wrap;
`

export const Card = styled.div `
display: flex;
gap: 37px;
flex-wrap: wrap;
`
export const Card1 = styled.img`
    width: 360px;
    height: 480px;
    box-sizing: border-box;
    border-radius: 30px;
backdrop-filter: blur(29.04px);
background: rgba(205, 205, 205, 0.1);
`
export const Product = styled.div`

`