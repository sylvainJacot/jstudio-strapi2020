import React, {useState} from "react";
import styled, {css} from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import {transitions} from "../../01 Atoms/Animations";
import {media} from "../../01 Atoms/MediaQueries";
import LightBoxPicture from "./LightBoxPicture";



const PictureComponent = (props) => {

    const [active,setactive] = useState(false)

    const handleOnClick = () => {
        setactive(!active)
    }

    return <>
        <Wrapper bigPicture={props.bigPicture} onClick={handleOnClick}>
            <AspectRatio
                video={props.video}
                videoportrait={props.videoportrait}
                videolandscape={props.videolandscape}
                landscape={props.landscape}
                carre={props.carre}
                rectanglelandscape={props.rectanglelandscape}
                rectangleportrait={props.rectangleportrait}
            >
                <img src={props.src} alt={props.alt}/>
            </AspectRatio>
            <LightBoxPicture
                onClick={handleOnClick}
                isactive={active}
                src={props.src}
                alt={props.alt}
                fullheight={props.fullheight}
                fullwidth={props.fullwidth}
            />
        </Wrapper>

    </>

};

export default PictureComponent;

export const Wrapper = styled.a`
display: block;
width: ${props => props.bigPicture? "304px" : "240px"};
flex-grow: ${props => props.bigPicture? "2" : "1"};
margin: 32px;

${media.tablet`
width: ${props => props.bigPicture? "400px" : "200px"};
`}
${media.desktopL`
width: ${props => props.bigPicture? "800px" : "240px"};
`}

`;


export const AspectRatio = styled.div`
overflow: hidden;
position: relative;
height: max-content;
box-shadow: 0 10px 18px ${colorsRoles.DarkGrey}50, 0 10px 11px ${colorsRoles.Black}70;

&:before {
position: absolute;
content: "";
display: block;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.White};
opacity: 0;
transition: ${transitions.basic2};
-webkit-animation: ${transitions.basic2};
-moz-animation: ${transitions.basic2};
-o-animation: ${transitions.basic2};
cursor:pointer;
z-index: 3;
}
&:hover {
    &:before {
    opacity: 0.1;
    transition: ${transitions.basic1};
    -webkit-animation: ${transitions.basic1};
    -moz-animation: ${transitions.basic1};
    -o-animation: ${transitions.basic1};
    }
}

${(props) => {
    return (
        props.videoportrait &&
        css`
            {
            padding-top: calc(100% / (9 / 16));
            }
            `
    );
}}

${(props) => {
    return (
        props.videolandscape &&
        css`
            {
            padding-top: calc(100% / (16 / 9));
            }
            `
    );
}}

${(props) => {
    return (
        props.carre &&
        css`
            {
            padding-top: 100%;
            }
            `
    );
}}

${(props) => {
    return (
        props.rectanglelandscape &&
        css`
            {
            padding-top: calc(100% / (4 / 3));
            }
            `
    );
}}

${(props) => {
    return (
        props.rectangleportrait &&
        css`
            {
            padding-top: calc(100% / (3 / 4));
            }
            `
    );
}}



& img {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
}


`;
