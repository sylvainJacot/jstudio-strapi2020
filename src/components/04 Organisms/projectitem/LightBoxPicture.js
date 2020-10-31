import React from "react";
import styled, {css} from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import {media} from "../../01 Atoms/MediaQueries";


const LightBoxPicture = (props) => {

    return <>
        <Wrapper onClick={props.onClick} isactive={props.isactive} fullheight={props.fullheight} fullwidth={props.fullwidth}>
            <img src={props.src} alt={props.alt}/>
        </Wrapper>

    </>

};

export default LightBoxPicture;

export const Wrapper = styled.div`
position: fixed;
content: "";
display: ${props => props.isactive ? "block" : "none"};
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.Black}E6;
z-index: 4;
overflow: scroll;

${media.desktop`
overflow: unset;
`}

& img {
display: block;
margin: auto;

${(props) => {
    return (
        props.fullheight && css`
        height: 100%;
        width: auto;
        ` );
}}

${(props) => {
    return (
        props.fullwidth && css`
        width: 100%;
        height: auto;
        ` );
}}

`;