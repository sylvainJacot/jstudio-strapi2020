import React from "react";
import styled from "styled-components";

import {media} from "../../01 Atoms/MediaQueries";
import {transitions} from "../../01 Atoms/Animations";
import {colorsRoles} from "../../01 Atoms/Colors";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import Parallax from "react-rellax";
import Button from "../../02 Molecules/Button";
import {fonts} from "../../01 Atoms/globalStyle";



export const Box = styled.section`
position: relative;
width: 100%;
height: 640px;
display: flex;
flex-direction: column-reverse;
content-visibility: auto;

${media.desktop`
height: 880px;
flex-direction: row;
`}

`;
export const LeftContent = styled.div`
height: 100%;
`;
export const LeftSide = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;


${media.desktop`
width: 50%;
`}

    ${LeftContent} {
    width: 80%;
    height: fit-content;
    text-align: center;
    ${media.desktop`
    text-align: left;
    width: 360px;
    `}
    ${media.desktopL`
    width: 480px;
    `}
    
    & p {
     ${fonts.RobotoItalic};
    font-size: 2rem;
    color: ${props => props.FieldTextColorVisible};
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 8px;
    font-style: italic;
    }
    
    & h3 {
    ${fonts.PlayFairDisplay};
    font-size: 6rem;
    line-height: 48px;
    color: ${props => props.TextColor};
    margin-bottom: 24px;
    ${media.desktop`
    margin-bottom: 32px;
    `}
    }
    
    & h3 ~ p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.White};
    letter-spacing: 0;
    line-height: 1.5;
    margin-bottom: 8px;
    text-align: left;
    ${media.desktop`
    margin-bottom: 16px;
    `}
    }

}
`;
export const ForeGroundPic = styled.div``;
export const BackGroundPic = styled.div``;
export const RightSide = styled.div`
width: 100%;
height: 200px;
position: relative;
background-color: ${props => props.bgColor};
transition: ${transitions.basic2};
-webkit-animation: ${transitions.basic2};
-moz-animation: ${transitions.basic2};
-o-animation: ${transitions.basic2};

${media.tablet`
height: 400px;
`}

${media.desktop`
width: 50%;
height: 100%;
`}

& ${BackGroundPic} {
position: absolute;
top: 80%;
right: 50%;
transform: translate(50%,50%);

${media.mobileL`
top: 64%;
right: 50%;
`}

${media.tablet`
top:40%;
right: 50%;
`}

${media.desktop`
top: 55%;
right: 64%;
transform: translate(50%,-50%);
`}

& img {
width: 240px;

${media.mobileL `
width: 320px;
`}

${media.tablet `
width: 400px;
`}
${media.desktop `
width: 640px;
`}

${media.desktopL `
width: 700px;
`}

}


}
& ${ForeGroundPic} {
    position: absolute;
    left: 0;
    top: 280%;
    transform: translate(50%,-50%);
    
    ${media.mobileL`
    left: -10%;
    top: 280%;
    `}
    
     ${media.tablet`
    left: 0;
    top: 200%;
    `}
    
    ${media.desktop`
     left: -40%;
     top: 80%;
    `}
    
    & img {
    width: 80px;
    
    ${media.mobileL`
    width:140px
    `}
    
    ${media.tablet`
    width:160px
    `}
    ${media.desktop`
    width:240px
    `}
    }

    }
}



`;


const NavUxUIProjectsItem = (props) => {

    return (
        <>

            <Box >
                <LeftSide FieldTextColorVisible={props.FieldTextColorVisible} TextColor={props.TextColor}>
                    <LeftContent>
                        <p>{props.fields}</p>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <Button pathname={props.slug} label={"See more"}/>
                    </LeftContent>
                </LeftSide>


                    <RightSide bgColor={props.bgColor}>
                        <BackGroundPic>
                            <Parallax speed={2} percentage={0} >
                                <ResponsiveImage
                                    sourceMobile={props.backgroundpicture}
                                />
                            </Parallax>
                        </BackGroundPic>


                        <ForeGroundPic>
                            <Parallax speed={8} percentage={0}>
                            <ResponsiveImage
                                sourceMobile={props.foregroundpicture}
                            />
                            </Parallax>
                        </ForeGroundPic>
                </RightSide>


            </Box>



        </>

    )
};

export default NavUxUIProjectsItem;

