import React from "react";
import styled from "styled-components";
import {colors, colorsRoles} from "../../01 Atoms/Colors";
import Button from "../../02 Molecules/Button";
import {media} from "../../01 Atoms/MediaQueries";
import {transitions} from "../../01 Atoms/Animations";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import {fonts} from "../../01 Atoms/globalStyle";


export const Box = styled.div`
position: relative;
width: 100%;
height: 800px;
display: flex;
flex-direction: column-reverse;
padding-bottom: 40px;
align-items: center;
    ${media.desktop`
        height: 500px;
        flex-direction: row;
        align-items: unset;
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
margin-top: 0px;
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
    ${fonts.Roboto};
    font-style: italic;
    font-size: 2rem;
    color: ${props => props.FieldTextColorVisible};
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 8px;
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
    color: black;
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

export const RightSide = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
${media.desktop`
width: 50%;
height: 100%;
`}

`;


export const ToolsBoxProject = styled.div`
position: absolute;
width: 272px;
height: 72px;
background-color: ${colors.PureWhite};
bottom: -110px;
right: 50%;
transform: translate(50%,-50%);
border-radius: 0px 0px 16px 16px;
z-index: -1;
transition: ${transitions.basic2};
display: flex;
align-items: center;
justify-content: center;
box-shadow: -1px 11px 25px -5px ${colorsRoles.DarkGrey}20;


${media.desktop`
width: 380px;
height: 96px;
bottom: -143px;
`}


${media.desktopL`
width: 400px;
height: 96px;
bottom: -143px;
`}

& p {
${fonts.Roboto};
font-weight: 600;
font-size: 1.5rem;
color: ${colorsRoles.LightGrey};
}

`;

export const PictureWrapper = styled.div`
position: absolute;
overflow: hidden;
width: 100%;
height: 100%;
z-index: 2;

& img {
width: 100%;
}

`;

export const ProjectPicture = styled.div`
position: relative;
width: 320px;
height: 195px;
background-color: ${colors.LightGrey2};

${media.desktop`
width: 400px;
height: 242px;
`}


${media.desktopL`
width: 500px;
height: 304px;
`}

&:after, &:before{
content: "";
position: absolute;
top: 3px;
width: 50%;
height: 100%;
background: linear-gradient(to bottom, transparent, ${colorsRoles.DarkGrey});
filter: blur(3px);
opacity: .4;
transition: ${transitions.basic1};
}

:before {
left: 0;
transform: skewY(-2deg);
}
:after {
right: 0;
transform: skewY(2deg);
}

${media.desktop`

 ${ToolsBoxProject} {
 bottom: 0px;
 }

&:hover {
    ${ToolsBoxProject} {
    bottom: -143px;
    transition: ${transitions.basic1};
    } 
}
`}


`;


export const ToolItem = styled.img`
width: 32px;
height: 32px;
margin-left: 16px;

${media.desktop`
width: 40px;
height: 40px;
margin-left: 24px;
`}

`;



const NavCreativeDeveloperProjectItem = (props) => {

    const Tools = props.Tools;

    return <>
        <Box>
            <LeftSide FieldTextColorVisible={"black"} TextColor={props.TextColor}>
                <LeftContent>
                    <p>{props.field}</p>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <Button pathname={props.slug} label={"See more"} lightmode/>
                </LeftContent>
            </LeftSide>
            <RightSide>

                    <ProjectPicture>
                        <PictureWrapper>
                            <ResponsiveImage
                                sourceMobile={props.imgsrc}
                                sourceDesktop={props.imgsrc}
                                breakPoint={"768"}
                                altImage={"Test"}
                            />
                        </PictureWrapper>
                        <ToolsBoxProject>
                            <p>built with</p>

                            {
                                Tools && Tools.map((item,index) => (
                                    <>
                                    <ToolItem
                                        key={index}
                                        src={item.logo}
                                        alt={item.altImage}
                                    ></ToolItem>
                                    </>


                                ))
                            }

                        </ToolsBoxProject>
                    </ProjectPicture>

            </RightSide>
        </Box>
    </>

};

export default NavCreativeDeveloperProjectItem;



