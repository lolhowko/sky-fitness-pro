import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Header = styled.div`
padding-top: 30px;
`

export const HeaderMain = styled.div `
    display: flex;
justify-content: space-between;
`
export const Logo = styled.div`
width: 220px;
    height: 35px;
    cursor:pointer;
`
export const HeaderInfo = styled.div`
display: flex;
justify-content: space-between;
padding-top: 35px;
`

export const HeaderButton = styled.div `
    color: white;
    background-color: #140D40;
    width: 77px;
    height: 36px;
    box-sizing: border-box;
    border: none;
    border-radius: 46px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

&:hover{
    background-color: #2D1F79;
}

&:active{
    background-color: #3B29A2;
}
`
export const Titles = styled.div `
`

export const HeaderDescription = styled.div`
    font-size: 20px;
    color: #FFFFFF;
    -webkit-text-stroke: 0.5px black;
    letter-spacing: 0.05px;
`

export const HeaderTitle = styled.div `
    color: white;
    font-size: 60px;
    width: 830px;
    height: 135px;
    padding-top: 17px;
`
export const ChangeBody = styled.div`
    float: right;
    position: static;
    padding-left: 145px;
`