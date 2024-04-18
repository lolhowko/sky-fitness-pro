import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-weight: 400px;
  `

export const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const Maincard = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  background-color: white;
  border: 1px solid #d0cece60;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`

export const InputLogo = styled.input`
    border: none;
    border-bottom: 1px solid #d0cece;
    background-color: transparent;
    color: inherit;
    outline: none;
    width: 279 px;
    height: 40 px;
    padding-top: 46px;
    padding-left: 3px;
    padding-bottom: 8px;
  }
  
  :placeholder {
    color: #d0cece;
  }
  `

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 46px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`

export const LogButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`
export const RegButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`

export const Error = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
`
