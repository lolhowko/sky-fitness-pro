import { styled } from "styled-components";

export const ContainerProfile = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const HeaderLogo = styled.div``;
export const Img = styled.img``;
export const HeaderProfile = styled.div`
  display: flex;
  column-gap: 9px;
`;
export const HeaderSvg = styled.svg`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;
export const HeaderSelect = styled.select`
  font: inherit;

  word-spacing: inherit;
  background-color: #fafafa;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;
  border: none;
  border-radius: 7px;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;

export const HeaderSelectOption = styled.option`
  border: none;
  outline: none;
`;