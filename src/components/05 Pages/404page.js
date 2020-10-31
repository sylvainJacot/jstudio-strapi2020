import React from "react";
import styled from "styled-components";
import {LogoJacotStudio} from "../01 Atoms/Icons";
import {colorsRoles} from "../01 Atoms/Colors";
import {fonts} from "../01 Atoms/globalStyle";
import {blinking} from "../01 Atoms/Animations";
import {media} from "../01 Atoms/MediaQueries";

export const Box = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

${media.desktop`
    margin-right: 80px;
`}

`;

export const ErrorBox = styled.div`
display: flex;
${fonts.Roboto};
font-weight: bold;
font-size: 6rem;
color: ${colorsRoles.White};
letter-spacing: 4px;

& svg {
margin: 0px 4px;
animation: ${blinking} 2s infinite;
}

`;

const ErrorPage = () => {
    return <>
        <Box>
            <ErrorBox>
                <p>ERROR 4</p>
                <LogoJacotStudio
                    FillColor={colorsRoles.White}
                    Size={"40px"}
                />
                <p>4</p>
            </ErrorBox>
        </Box>
    </>

};

export default ErrorPage;

