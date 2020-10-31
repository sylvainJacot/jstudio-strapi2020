import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/MediaQueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/Colors";
import {transitions} from "../../01 Atoms/Animations";
import {ClientsUXUI, ClientsDeveloper, ClientsRetoucher} from "../../01 Atoms/Clients";
import {fonts} from "../../01 Atoms/globalStyle";

export const HeaderWrapper = styled.header`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 104px 16px 0 16px;
&:after {
content: "";
position: absolute;
display: block;
z-index: -1;
top: 0;
right: 0;
bottom: 0;
left: 0;
${gradient.DarkGrey};
}

${media.tablet`
padding: 104px 80px 0 80px;
`}

${media.desktop`
padding: unset;
align-items: unset;
padding-top: 80px;
flex-wrap: wrap;
align-items: unset;
flex-direction: column;
`}

`
export const HeaderMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
${media.desktop`
flex-direction: row;
justify-content: center;
`}
`;
export const Picture = styled.img`
width: 200%;
position: absolute;
left: ${props => props.Flipped? "-64%" : "-64%"};
top: ${props => props.Flipped? "-24%" : "-32%"};
transform: translate(-50%,-50%);
z-index: 1;
transform: ${props => props.Flipped? "scaleX(-1)" : "scaleX(1)"};
`;
export const DisciplinePictureWrapper = styled.div`
position: relative;
width: 184px;
height: 276px;
background-color: ${colorsRoles.DarkGrey};
overflow: hidden;
box-shadow: -8px 8px 0px 0px ${props => props.MainColor};
${media.desktop`
width: 308px;
height: 456px;
transform: scale(.9);
box-shadow: -16px 16px 0px 0px ${props => props.MainColor};
`}
&:after {
content: "";
display: block;
position: absolute;
width: 140%;
height: 140%;
top: -80%;
${backgrounds.RadialBg01};
}
&:before {
position: absolute;
content: "";
display: block;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${props => props.MainColor}16;
}

`;
export const TextContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 24px;
margin-bottom: 32px;
${media.desktop`
margin-left: 80px;
width: 480px;
align-items: unset;
`}
${media.desktopL`
margin-top: unset;
width: 600px;
font-size: 6rem;
line-height: 84px;
margin-left: 120px;
`}
 h1 {
position: relative;
${fonts.PlayFairDisplay};
font-size: 4rem;
line-height: 48px;
color: ${colorsRoles.White};
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
     &:after {
    content: "";
    position: absolute;
    top: calc(48px + 16px);
    width: 80px;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.MainColor};
    transition: ${transitions.basic2};
        ${media.tablet`
        bottom: -16px;
        `}
        ${media.desktop`
        top: 100px;
        left:0;
        transform: unset;
        `}
     }
}
p {
    ${fonts.Roboto};
    font-size: 2rem;
    color: ${colorsRoles.White};
    letter-spacing: 0;
    line-height: 1.5;
    margin-top: 40px;
    padding: 0 8px;
    ${media.desktop`
    font-size: 2rem;
    padding: 0;
`}
}
`;
export const Clients = styled.div`
text-align: center;
padding: 40px 0px;
width: 90%;
margin: auto;
     & p {
         ${fonts.Roboto};
         color: ${colorsRoles.White};
         font-size: 2rem;
         margin-bottom: 24px;
         opacity: .6;
     }
     ${media.desktop`
         padding: 80px 0px;
     `}
 
`;
export const LogoItemWrapper = styled.div`
position: relative;
width: 64px;
height: 64px;
margin-left: 32px;
display: flex;
align-items: center;
justify-content: center;
&:nth-child(1) {
margin-left: 0px;
}

${media.tablet`
margin-left: 40px;
`}

`;

export const LogosWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
flex-wrap: wrap;
    & img {
        width: auto;
        max-width: 80px;
        max-height: 48px;
        fill: ${colorsRoles.White};
    }
`;


const Skillheader = (props) => {


    return <>
            <HeaderWrapper>
                <HeaderMain>
                    <DisciplinePictureWrapper MainColor={props.mainColor}>
                        <Picture src={props.srcMainImg} Flipped={props.Flipped}/>
                    </DisciplinePictureWrapper>
                    <TextContent MainColor={props.mainColor}>
                        <h1>{props.mainTitle}</h1>
                        <p>{props.description}</p>
                    </TextContent>
                </HeaderMain>
                <Clients>
                    <p>Collaborated with</p>
                    <LogosWrapper>
                        {
                            props.ClientsUXUI && ClientsUXUI.map((item, index) => (
                                <LogoItemWrapper key={index}><img src={item.src} alt={item.altimg}/></LogoItemWrapper>
                            ))
                        }

                        {
                            props.ClientsDeveloper && ClientsDeveloper.map((item,index) => (
                                <LogoItemWrapper key={index}><img src={item.src} alt={item.altimg}/></LogoItemWrapper>
                            ))
                        }

                        {
                            props.ClientsRetoucher && ClientsRetoucher.map((item, index) => (
                                <LogoItemWrapper key={index}><img src={item.src} alt={item.altimg}/></LogoItemWrapper>
                            ))
                        }

                    </LogosWrapper>
                </Clients>
            </HeaderWrapper>
    </>

};

export default Skillheader;