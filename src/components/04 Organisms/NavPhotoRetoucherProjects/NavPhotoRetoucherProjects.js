import React from "react";
import NavPhotoRetoucherProjectItem from "../NavPhotoRetoucherProjects/NavPhotoRetoucherProjectItem";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import {PhotoRetoucherProjects} from "../../01 Atoms/Data";
import {useRouteMatch} from "react-router-dom";


const NavPhotoRetoucherProjects = () => {
    let { url } = useRouteMatch();
    return <>
        <Wrapper>
            {
                PhotoRetoucherProjects.map((project,index) =>(
                    <NavPhotoRetoucherProjectItem
                        key={index}
                        thumbnail={project.thumbnailproject}
                        title={project.title}
                        slug={`${url}/${project.slug}`}
                    />
                ))
            }
        </Wrapper>
    </>

};

export default NavPhotoRetoucherProjects;

export const Wrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
background-color: ${colorsRoles.LightGrey2};
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-bottom: 40px;
`;