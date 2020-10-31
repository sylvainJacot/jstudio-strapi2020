import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {fonts} from "../../01 Atoms/globalStyle";
import {media} from "../../01 Atoms/MediaQueries";
import {transitions, Breathe, UpDown} from "../../01 Atoms/Animations";
import {colorsRoles, gradient, backgrounds} from "../../01 Atoms/Colors";
import Button from "../../02 Molecules/Button";

export const DisciplineNavItemWrapper = styled.li`
position: relative;
display: block;
overflow: hidden;
width: 100%;
height: 360px;
background-color: ${colorsRoles.DarkGrey};
${media.desktop`
height: 100vh;
width: 33.33%;
`}
&:before {
content: "";
position: absolute;
top:0;
transform: translate(0,-50%);
width: 100%;
height: 320px;
${backgrounds.RadialBg01};
${media.desktop`
width: 690px;
height: 624px;
right: 50%;
transform: translate(50%,-50%);
`}
}
&:after {
content: "";
position: absolute;
bottom: -16px;
width: 100%;
height: 160px;
${props => props.bottomGradient}
/*${gradient.Brand0130};*/
}
`;
export const DisciplineNavItemText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
height: 220px;
margin-top: 32px;
text-align: right;
color: ${colorsRoles.White};
transition: ${transitions.basic2};
${media.mobileL `
margin-top: 40px;
`}
${media.desktop`
margin-top:80px;
width: 100%;
max-width: unset;
align-items: unset;
display: flex;
flex-direction: column;
`}
h1 {
position: relative;
${fonts.PlayFairDisplay};
font-size: 3rem;
text-align: right;
line-height: 32px;
${media.tablet`
font-size: 4rem;
`}
${media.desktop`
text-align: left;
line-height: 40px;
`}
&:after {
content: "";
position: absolute;
bottom: -8px;
right: 0;
width: 40px;
height: 2px;
background-color: ${props => props.colorBrand};
transition: ${transitions.basic2};
${media.tablet`
bottom: -16px;
`}
${media.desktop`
right:unset;
left:0;
`}
}
}
p {
margin-top: 32px;
${fonts.Roboto};
font-size: 2rem;
line-height: 1.5;
${media.tablet`
margin-top: 34px;
font-size: 2rem;
`}
${media.desktop`
text-align: left;
display: none;
`}
};
& a,span {
visibility: visible;
${media.desktop`
visibility: hidden;
`}
}
`;
export const ImgShadow = styled.div`
position: absolute;
display: none;
width: 80%;
height: 40px;
bottom: 4%;
right: 50%;
z-index: 1;
transform: translate(50%,0);
${backgrounds.RadialBg02};
${media.desktop`
display: block;
animation: ${Breathe} 5s linear infinite;

opacity: 1;
-moz-opacity: 1;

transition: ${transitions.basic1};
`}
${media.desktopL`
bottom: 2%;
`}
`;
export const StyledLink = styled(NavLink)` 
display: block;
padding: 0 16px;
width: 50%;
float: right;
z-index: 1;
${media.mobileL`
padding: 0 32px;
`}
${media.tablet`
padding: 0 40px;
`}
${media.desktop`
width: auto;
float: unset;
`}

& img {
    position: absolute;
    width: 328px;
    left: -80px;
    top: 64px;
    transition: ${transitions.easeOut};
    ${media.tablet`
        width: 400px;
        top: 0;
    `}   
    ${media.desktop`
        left:50%;
        bottom: -24%;
        animation: ${UpDown} 5s linear infinite;
        top: unset;
        @media not all and (min-resolution:.001dpcm) { 
            transform: translate(-50%,-50%);
            animation: none;
      }
    `}
}
    
}
////////////////////:hover effects
&:hover {
    cursor: pointer;
    transition: ${transitions.basic1};

    & > img {
    ${media.desktop`
      width: 560px; 
      bottom: -80%; 
      transition: ${transitions.basic1};
    `}
    
    }

    ${DisciplineNavItemText} > p {
    display: block;
    }
    ${ImgShadow} {
    display: none;
    ${backgrounds.RadialBg02Transparent};
        transition: ${transitions.basic1};
    }
    ${DisciplineNavItemText} {
        & > h1:after {
        width: 80px;
        transition: ${transitions.basic2};
        }
        ${media.desktop`
        &  a, span {
        visibility: visible;
        padding: 8px 24px 8px 16px;
        transition: ${transitions.basic1};
      `}
        }
    }
}`;
export const BrandBackground = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: ${props => props.colorBrand}16;
`;

const Skillsnavitem = (props) => {


    return (
        <>
            <DisciplineNavItemWrapper bottomGradient={props.bottomGradient}>

                <StyledLink to={props.pathname}>

                    <DisciplineNavItemText colorBrand={props.colorBrand}>

                        <h1>{props.title}</h1>
                        <p>{props.quote}</p>
                        <Button label={props.label} small isspan/>

                    </DisciplineNavItemText>


                    <img alt={props.altImg} src={props.src} />

                    <ImgShadow/>
                    <BrandBackground colorBrand={props.colorBrand}/>

                </StyledLink>


            </DisciplineNavItemWrapper>

        </>

    )
}

export default Skillsnavitem;

