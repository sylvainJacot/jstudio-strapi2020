import React from "react";
import styled from "styled-components";

import {media, sizes} from "../../01 Atoms/MediaQueries";
import ProjectHeader from "../../04 Organisms/projectitem/ProjectHeader";
import ProjectMainTitle from "../../04 Organisms/projectitem/ProjectMainTitle";
import TemplateMethodo from "../../04 Organisms/skillpage/TemplateMethodo";
import TemplateImageProject from "../../04 Organisms/projectitem/TemplateImageProject";
import BackButton from "../../02 Molecules/BackButton";

export const Box = styled.div`

margin-top: 64px;

${media.desktop`
margin-top: 0px;
margin-right: 80px
`};

`;

export const BackgroundImageProject = styled.div`

width: 100%;
height: 200px;
background-image: url(${props => props.bgImage});
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 

${media.desktop `
height: 400px;
`}

`;

const UIUXDesignerProject = (props) => {

    const ImageProject = props.ImageProject;

    return <>
        <Box>
            <BackButton/>
            <ProjectHeader
                headerImage={props.headerImage}
                mainColor={props.mainColor}
            />
            <ProjectMainTitle
                title={props.title}
                titlerole={props.titlerole}
                description={props.descriptionrole}
                roles={props.roles}
            />
            <TemplateMethodo
                projects={props.projects}
                isproject
            />
            <BackgroundImageProject
            bgImage={props.bgImage}
            />

            {ImageProject.map((item,index) => (
                <TemplateImageProject
                    key={index}
                    sourceDesktop={item.srcDesktop}
                    sourceMobile={item.srcMobile}
                    breakPoint={sizes.tablet}
                    altImage={item.altImg}
                    bgColor={item.bgColor}
                />
            ))

            }
        </Box>
    </>

};

export default UIUXDesignerProject;