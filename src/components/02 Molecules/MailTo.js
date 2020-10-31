import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";
import {transitions} from "../01 Atoms/Animations";
import {IcArrow} from "../01 Atoms/Icons";

export const Link = styled.a`
position: relative;
display: inline-block;
width: fit-content;
height: fit-content;
padding: 16px;
margin-top: 8px;
margin-bottom: 16px;
border-radius: 8px;
color: ${colorsRoles.DarkGrey};
background-color: transparent;
border: 1px solid ${colorsRoles.DarkGrey};  
& div > svg {
fill: ${colorsRoles.DarkGrey};
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
`;

export const ContentLink = styled.div`
display: flex;
align-items: center;
color: ${colorsRoles.DarkGrey};
font-family: Roboto;
font-size: 2rem;

& svg {
margin-left: 16px;
transition: ${transitions.basic1};
-webkit-animation: ${transitions.basic1};
-moz-animation: ${transitions.basic1};
-o-animation: ${transitions.basic1};
}
\`;
`;


const MailTo = ({email,subject,body,label}) => {
    return <>
        <Link href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
            <ContentLink>
                {label ? label : "Default"}
                <IcArrow IconSize={"24px"} SizeBis={"100%"}/>
            </ContentLink>
        </Link>
    </>

};

export default MailTo;