/* seen on https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni */

import {createGlobalStyle} from "styled-components";
import {colorsRoles} from "./Colors";


import RobotoRegular from "./fonts/Roboto/Roboto-Regular.woff";
import RobotoRegular2 from "./fonts/Roboto/Roboto-Regular.woff";
import RobotoLightItalic from "./fonts/Roboto/Roboto-LightItalic.woff";
import RobotoBold from "../01 Atoms/fonts/Roboto/Roboto-Bold.woff";

export default createGlobalStyle`


@font-face {
  font-family: 'Roboto', sans-serif;
url(${RobotoRegular}) format('woff'),
url(${RobotoRegular2}) format('woff2'),
url(${RobotoLightItalic}) format ('woff'),
url(${RobotoBold}) format ('woff');
font-weight: normal;
  font-style: normal;
}



    
html {
font-size: 8px;
}

body {
background-color: ${colorsRoles.DarkGrey}
`;

export const fonts = {
    Roboto : "font-family: 'Roboto', sans-serif;",
    RobotoItalic : "font-family: 'Roboto', sans-serif;",
    RobotoBold : "font-family: 'Roboto', sans-serif;",
    PlayFairDisplay : "font-family: 'Playfair Display', serif;",
}