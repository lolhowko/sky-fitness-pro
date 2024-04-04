import styled from "styled-components"

export const ProfCard = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  position: absolute;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Параметры тени */
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  @media (max-width: 1024px) {
    height: 400px;
    width: 300px;
  }
`
export const ProfList = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 110px;
  margin-bottom: 300px;
`
export const Prof = styled.div`
  position: relative;
  margin-bottom: 340px;
`
export const ProfButton = styled.button`
  width: 136px;
  height: 43px;
  left: 30px;
  top: 410px;
  background: #c7e957;
  border-radius: 80px;
  font-family: 'StratosSkyeng', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  position: absolute;
  border: none;
  @media (max-width: 1024px) {
    top: 340px;
  }
`
export const CourseName = styled.h2`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.5px;
  width: 290px;
  padding-top: 30px;
  padding-left: 30px;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`
