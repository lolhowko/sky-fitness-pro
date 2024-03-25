import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


/* button,
._btn {
  cursor: pointer;
} */

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("./fonts/StratosLCWeb-Regular.woff2")format("woff2"),
    url("./fonts/StratosLCWeb-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  // background-color: #FAFAFA;
  // padding-left: calc(50% - 580px);
  // padding-right: calc(50% - 580px);
}

::-webkit-scrollbar { 
  width: 5px; /* ширина для вертикального скролла */ 
  height: 0px; /* высота для горизонтального скролла */ 
  background-color: rgba(0, 0, 0, 0.05); } /* ползунок скроллбара */ 
  
::-webkit-scrollbar-thumb { 
    background-color: rgba(0, 0, 0, 0.15); 
    border-radius: 9em; 
    // box-shadow: inset 1px 1px 10px #ffffff; 
  }


// ._btn-icon:hover svg {
//   fill: transparent;
//   stroke: #acacac;
//   cursor: pointer;
// }


// ._btn-icon:active svg {
//   fill: transparent;
//   stroke: #ffffff;
//   cursor: pointer;
// }

// ._btn-icon:active .track-play__like-svg,
// ._btn-icon:active .track-play__dislike-svg {
//   fill: #696969;
//   stroke: #ffffff;
//   cursor: pointer;
// }

`;