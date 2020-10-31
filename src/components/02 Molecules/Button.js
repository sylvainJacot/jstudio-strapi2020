import React from "react";
import styled, { css } from "styled-components";
import {IcArrow} from "../01 Atoms/Icons"
import {NavLink} from "react-router-dom";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";
import {transitions} from "../01 Atoms/Animations";



export const StyledLink = styled(NavLink)`
position: relative;
display: inline-block;
width: fit-content;
height: fit-content;
padding: 16px;
margin-top: 8px;
margin-bottom: 16px;
border-radius: 8px;
color: ${colorsRoles.White};
background-color: transparent;
border: 1px solid ${colorsRoles.White};  
& div > svg {
fill: ${colorsRoles.White};
}  
${media.desktop`
margin-top: 24px;
padding: 24px;
margin-bottom: 0px;
&:hover {
        & svg {
        margin-left: 32px;
            transition: ${transitions.basic1};
            -webkit-animation: ${transitions.basic1};
            -moz-animation: ${transitions.basic1};
            -o-animation: ${transitions.basic1};
        }
    }
`}
    
    
${(props) => {
    return (
      props.small &&
      css`
      padding: 8px 16px 8px 16px;
      ${media.desktop`
      padding: 8px 16px 8px 16px;
      `}
          `
    );
}}

${(props) => {
    return (
        props.lightmode &&
        css`
        border-color: ${colorsRoles.DarkGrey};
        & > div {
        color: ${colorsRoles.DarkGrey};
        & > svg {
        fill: ${colorsRoles.DarkGrey};
        }
        }
        `
    );
}}

`;
export const StyledSpan = styled.span`
position: relative;
display: block;
width: fit-content;
height: fit-content;
padding: 16px;
margin-top: 8px;
margin-bottom: 16px;
border-radius: 8px;
color: ${colorsRoles.White};
background-color: transparent;
border: 1px solid ${colorsRoles.White}; 
z-index: 1; 
& div > svg {
fill: ${colorsRoles.White};
}  
${media.desktop`
margin-top: 24px;
padding: 24px;
margin-bottom: 0px;
&:hover {
        & svg {
        margin-left: 32px;
        transition: ${transitions.basic1};
        -webkit-animation: ${transitions.basic1};
        -moz-animation: ${transitions.basic1};
        -o-animation: ${transitions.basic1};
        }
    }
`}
    
    
${(props) => {
    return (
        props.small &&
        css`
      padding: 8px 16px 8px 16px;
      ${media.desktop`
      padding: 8px 16px 8px 16px;
      `}
          `
    );
}}

${(props) => {
    return (
        props.lightmode &&
        css`
        border-color: ${colorsRoles.DarkGrey};
        & > div {
        color: ${colorsRoles.DarkGrey};
        & > svg {
        fill: ${colorsRoles.DarkGrey};
        }
        }
        `
    );
}}

`;

export const Content = styled.div`
display: flex;
align-items: center;
color: ${colorsRoles.White};
font-family: Roboto;
font-size: 2rem;

& svg {
margin-left: 16px;
}
\`;
`;



const Button = ({ pathname, label, small, lightmode, isspan}) => {


    return (
        <>

        {
            isspan ?

            <StyledSpan  small={small} lightmode={lightmode}>
                <Content>
                    {label ? label : "Default"}
                    <IcArrow IconSize={"24px"} SizeBis={"100%"}/>
                </Content>
            </StyledSpan>

                :

            <StyledLink to={pathname} small={small} lightmode={lightmode}>
                <Content>
                    {label ? label : "Default"}
                    <IcArrow IconSize={"24px"} SizeBis={"100%"}/>
                </Content>
            </StyledLink>

        }
        </>

    );
};

export default Button;
