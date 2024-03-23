import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div `
    position:relative;
    overflow:visible;
    background-color: #271A58;
    height: 1448px;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
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
    height: 110px;
    padding-top: 17px;
`
export const ChangeBody = styled.div`
    float: left;
    position: absolute;
    right: 315px;
`

export const Courses = styled.div`
    padding-top: 52px;
    display: flex;
    gap: 37px;
    flex-wrap: wrap;
`

export const Card = styled.div `
    width: 360px;
    height: 480px;
    box-sizing: border-box;
    border-radius: 30px;
`
export const Card1 = styled.img`
    width: 360px;
    height: 480px;
    box-sizing: border-box;
    border-radius: 30px;
backdrop-filter: blur(29.04px);
background: rgba(205, 205, 205, 0.1);
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 41px;
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