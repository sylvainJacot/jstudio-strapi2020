import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import {media} from "../../01 Atoms/MediaQueries";

const TemplateImageProject = (props) => {
    return <>
            <TemplateImageProjectWrapper bgColor={props.bgColor}>
            <ResponsiveImage
                sourceDesktop={props.sourceDesktop}
                sourceMobile={props.sourceMobile}
                breakPoint={props.breakPoint}
                altImage={props.altImage}
            />
            </TemplateImageProjectWrapper>

    </>

};

export default TemplateImageProject;

export const TemplateImageProjectWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: ${props => props.bgColor};
& picture {
width: 100%;
${media.desktop`
width: 80%;
`}
& img {
width: 100%;
}
}
`;