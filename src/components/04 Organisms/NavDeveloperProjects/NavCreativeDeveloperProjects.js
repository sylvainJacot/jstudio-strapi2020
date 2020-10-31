import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import NavCreativeDeveloperProjectItem from "./NavCreativeDeveloperProjectItem";
import {CreativeDeveloperProjects} from "../../01 Atoms/Data";
import {useRouteMatch} from "react-router-dom";
import {media} from "../../01 Atoms/MediaQueries";
import CodeSandboxes from "./CodeSandboxes/CodeSandboxes";


const NavCreativeDeveloperProjects = () => {
    let { url } = useRouteMatch();
    return <>
    <NavCreativeDeveloperProjectsWrapper>

        {
            CreativeDeveloperProjects.map((project,index) => (
                <NavCreativeDeveloperProjectItem
                key={index}
                field={project.fields}
                title={project.title}
                description={project.description}
                slug={`${url}/${project.slug}`}
                Tools={project.madeWith}
                TextColor={project.maincolor}
                imgsrc={project.thumbnailproject}
                />
            ))
        }

    </NavCreativeDeveloperProjectsWrapper>

     <CodeSandboxes/>

    </>

};

export default NavCreativeDeveloperProjects;

export const NavCreativeDeveloperProjectsWrapper = styled.section`
width: 100%;
background-color: ${colorsRoles.White};
padding-top: 88px;

${media.desktop`
padding-top: 0px;
`}

`;