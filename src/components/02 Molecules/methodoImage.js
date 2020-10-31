import React from "react";
import styled from "styled-components";
import {media} from "../01 Atoms/MediaQueries";
import {transitions} from "../01 Atoms/Animations";
import ResponsiveImage from "../01 Atoms/ResponsiveImage";
import {colorsRoles} from "../01 Atoms/Colors";
import {fonts} from "../01 Atoms/globalStyle";


export const ToolTip = styled.span`
display: none;
position: absolute;
width: max-content;
padding: 0 24px;
border-radius: 8px;
left: 50%;
top: 100%;
transform: translate(-50%,50%);
background-color: ${colorsRoles.LightGrey2};

${fonts.Roboto};
font-size: 2rem;
color: ${colorsRoles.DarkGrey};
letter-spacing: 0;
text-align: center;
line-height: 24px;
&:after {
content:"";
display: block;
position: absolute;
top:-4px;
left: 50%;
width: 8px;
height: 8px;
background-color: ${colorsRoles.LightGrey2};
transform: translate(50%,-50%);
transform: rotate(45deg);
}
`;
export const Box = styled.div`
position: relative;
margin: 24px 16px;

${media.desktop`
margin: 16px;
`}

&:hover {
${ToolTip} {
display: block;
}
}
`;


export const MethodoImageWrapper = styled.div`
position: relative;
width: 64px;
height: 64px;
border-radius: 8px;
padding: 8px;
overflow: hidden;
background-color: ${colorsRoles.White};
display: flex;
justify-content: center;
align-items: center;

&:after{
content: "";
display: block;
position: absolute;
top: 100%;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.White}90;
transition: ${transitions.basic2};
-webkit-animation: ${transitions.basic2};
-moz-animation: ${transitions.basic2};
-o-animation: ${transitions.basic2};
}
////////////////// HOVER EFFECT

&:hover {
&:after {
top: 50%;
transition: ${transitions.basic2};
-webkit-animation: ${transitions.basic2};
-moz-animation: ${transitions.basic2};
-o-animation: ${transitions.basic2};
}
}
& img {
width: 56px;
height: 56px;
} 
`;






const MethodoImage = (props) => {
    return <>
        <Box>
            <MethodoImageWrapper MethodoColor={props.MethodoColor}>
            <ResponsiveImage
                sourceMobile={props.sourceMobile}
                altImage={props.altImage}
            />
        </MethodoImageWrapper>
            <ToolTip BgLightMode={props.BgLightMode}>{props.methodTitle}</ToolTip>
        </Box>
    </>

};

export default MethodoImage;