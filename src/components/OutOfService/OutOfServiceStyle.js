import styled, { createGlobalStyle } from 'styled-components'

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
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
`

export const Titles = styled.div``

export const HeaderDescription = styled.div`
font-size: 40px;
font-weight: 400;
line-height: 48px;
letter-spacing: 0em;
@media (max-width: 426px) {
  font-size: 30px;
}
`

export const HeaderTitle = styled.div`
  color: black;
  font-size: 60px;
  width: 830px;
  height: 135px;
  padding-top: 17px;
`
