import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/MediaQueries";


const PhotoProjectHeader = (props) => {
    return <>
        <Wrapper headerbgimge={props.headerdeco}>

        </Wrapper>

    </>

};

export default PhotoProjectHeader;

export const Wrapper = styled.div`
width: 100%;
height: 120px;
background: no-repeat center url(${props => props.headerbgimge});
background-size: cover;

${media.tablet`
height: 136px;
`}

${media.desktop`
height: 200px;
`}


`;