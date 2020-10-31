import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import {transitions} from "../../01 Atoms/Animations";
import {media} from "../../01 Atoms/MediaQueries";


export const Header = styled.header`
position: relative;
height: 208px;
width: 100%;
padding-top: 40px;
padding-bottom: 16px;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: ${props => props.mainColor} ;

${media.desktop`
height: 400px;
padding-top: 24px;
`};

& picture {
width: 80%;
height: 100%;
transition: ${transitions.basic2};
-webkit-animation: ${transitions.basic2};
-moz-animation: ${transitions.basic2};
-o-animation: ${transitions.basic2};
display: flex;
justify-content: center;
align-items: center;

&:hover {
transform: scale(.9);
transition: ${transitions.basic1};
-webkit-animation: ${transitions.basic1};
-moz-animation: ${transitions.basic1};
-o-animation: ${transitions.basic1};
}

${media.desktop`
width: 48%;
`};
& img {

max-height: 90%;

}

}



`;


const ProjectHeader = (props) => {
    return <>

            <Header mainColor={props.mainColor}>
                <ResponsiveImage
                    sourceMobile={props.headerImage}
                />
            </Header>
    </>
};

export default ProjectHeader;