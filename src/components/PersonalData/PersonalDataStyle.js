import {
  styled
} from "styled-components";

export const ContainerProfile = styled.div ``;
export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const HeaderLogo = styled.div ``;
export const Img = styled.img ``;
export const HeaderProfile = styled.div `
  display: flex;
  column-gap: 9px;
`;
export const HeaderSvg = styled.svg `
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-color: #D9D9D9;
  box-sizing: border-box;
  border-radius: 36px;
`;
export const HeaderSelect = styled.select `
background-color: inherit;
color: white;
padding: 12px;
// width: 250px;
border: none;
font-size: 20px;
-webkit-appearance: button;
appearance: button;
outline: none;
font-family: "StratosSkyeng";
cursor: pointer;
  &:before {
    border: none;
    box-shadow: none;
  }
`;

export const HeaderSelectOption = styled.option`
  border: none;
  outline: none;
`;