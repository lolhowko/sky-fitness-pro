import styled, { createGlobalStyle } from "styled-components";
import {Link} from "react-router-dom"


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Container = styled.div `
    position:relative;
    overflow:visible;
    background-color: #271A58;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 41px;
    padding-bottom: 60px;
`

export const FooterButton = styled.div `
    background-color: #C7E957;
    width: 147px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 46px;
    border: none;
    font-size: 24px;
    color: rgb(0, 0, 0);
font-family: StratosSkyeng;
font-size: 24px;
font-weight: 400;
line-height: 32px;
letter-spacing: -0.1px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
    background-color: #DAF289;
}

&:active{
    background-color: #EBFFAB;
}
`

export const PageUp = styled.a`
text-decoration:none;
`