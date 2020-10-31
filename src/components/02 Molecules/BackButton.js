import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {IcArrow} from "../01 Atoms/Icons";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";

export const BackButtonWrapper = styled.button`
position: fixed;
z-index: 5;
top: 90%;
left: 16px;
width: 48px;
height: 48px;
background-color: ${colorsRoles.White};
border: none;
border-radius: 50%;

${media.desktop`
top: 24px;
left: 24px;
`}

& svg {
transform: rotateY(-180deg);
fill: ${colorsRoles.DarkGrey};
width: 24px;
height: 24px;
}

`;

const BackButton = () => {

    let History = useHistory();


    const handleBackHistory = () => {
        History.goBack()
    }

    return <>
        <BackButtonWrapper
        onClick={handleBackHistory}
        > <IcArrow/>
        </BackButtonWrapper>
    </>

};

export default BackButton;