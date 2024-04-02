import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 46px;
  background: rgb(88, 14, 162);
  color: rgb(250, 250, 250);
  font-family: StratosSkyeng;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: center;
  width: 275px;
  height: 52px;
`
export const Popup = styled.div`
    width: 444px;
    background-color: white;

    border-color: black;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
    display: flex;

    flex-direction: column;
    align-items: center;

    position: fixed;
    left: calc(50% - 222px);
    top: calc(50% - 270px);
    z-index: 9999;
}
`
export const PopupTitle = styled.div`
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: center;
`
export const PopupQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  gap: 30px;
  margin-bottom: 30px;
`
export const PopupQuestionItem = styled.div``

export const PopupQuestionText = styled.div`
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: left;
  margin-bottom: 20px;
`
export const PopupQuestionAnswer = styled.input`
  border: none;
  border-bottom: 1px solid rgb(208, 206, 206);
  outline: none;
  width: 361px;
`

export const ProgressOkConfirm = styled.div`
  width: 444px;
  height: 450px;
  background-color: white;
  position: absolute;
  left: 500px;
  bottom: 250px;
  border-color: black;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
  overflow: hidden;

  position: fixed;
  left: calc(50% - 222px);
  top: calc(50% - 225px);
  z-index: 9999;
`
export const ProgressOkConfirmTitle = styled.div`
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0%;
  text-align: center;
  margin-top: 40px;
  padding-left: 88px;
  padding-right: 88px;
`
export const ProgressOkImg = styled.img`
  width: 444px;
  height: 360px;
`
export const PopupButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 46px;
  background: rgb(88, 14, 162);
  color: rgb(255, 255, 255);
  font-family: StratosSkyeng;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: center;
`

// КОД ОТ ЛАНЫ

export const MyProgressText = styled.p`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
`

export const MyProgressInput = styled.input`
  width: 100%;
  height: 32px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;

  &::placeholder {
    color: #d0cece;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
  }
`

export const ErrorText = styled.p`
  color: red;
  margin-bottom: 40px;
  font-size: 25px;
  text-align: center;
`
