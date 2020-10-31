import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import {colorsRoles} from "../../01 Atoms/Colors";
import {transitions} from "../../01 Atoms/Animations";
import {Link} from "react-router-dom";
import {media} from "../../01 Atoms/MediaQueries";
import {fonts} from "../../01 Atoms/globalStyle";

const NavPhotoRetoucherProjectItem = (props) => {
    return <>
        <Wrapper to={props.slug}>
            <PictureWrapper >
                <ResponsiveImage
                sourceDesktop={props.thumbnail}
                sourceMobile={props.thumbnail}
            />
            </PictureWrapper>
            <PictureLabel>
                <h3>{props.title}</h3>
            </PictureLabel>
        </Wrapper>
    </>

};

export default NavPhotoRetoucherProjectItem;

export const PictureLabel = styled.div`
position: absolute;
width: 88%;
height: 56px;
bottom: -56px;
display: flex;
justify-content: center;
align-items: center;
border-top: none;
background-color: ${colorsRoles.White};
border-radius: 0px 0px 4px 4px;
z-index: 0;
transition: ${transitions.basic1};
-webkit-animation: ${transitions.basic1};
-moz-animation: ${transitions.basic1};
-o-animation: ${transitions.basic1};
& h3 {
    ${fonts.PlayFairDisplay};
    font-size: 2rem;
    line-height: 1.5;
    color: ${colorsRoles.DarkGrey};
}

${media.desktop`
bottom: 0px;
`}

`;

export const Wrapper = styled(Link)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 320px;
height: auto;
margin: 40px;
&:hover {
  ${media.desktop`
  ${PictureLabel} {
     bottom: -56px;
     transition: ${transitions.basic2};
    -webkit-animation: ${transitions.basic2};
    -moz-animation: ${transitions.basic2};
    -o-animation: ${transitions.basic2};
        }
    `}
}

`;



export const PictureWrapper = styled.div`
position: relative;
overflow: hidden;
height: 100%;
background-color: grey;
box-shadow: 0 2px 10px ${colorsRoles.DarkGrey}50, 0 2px 3px ${colorsRoles.DarkGrey}50;
border: 4px solid ${colorsRoles.White};
cursor: pointer;
z-index: 1;

&:before {
content: "";
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: linear-gradient(to right bottom, ${colorsRoles.White} 5.99%, ${colorsRoles.White} 48.93%, rgba(255, 255, 255, 0) 49.21%);
opacity: .2;
transition: ${transitions.basic1};
-webkit-animation: ${transitions.basic1};
-moz-animation: ${transitions.basic1};
-o-animation: ${transitions.basic1};
}
& img {
width: 100%;
height: auto;
}

///// -----------  HOVER effects -----------

&:hover {

  &:before {
  transform: translateY(-100%);
  opacity: .1;
  transition: ${transitions.basic1};
    -webkit-animation: ${transitions.basic1};
    -moz-animation: ${transitions.basic1};
    -o-animation: ${transitions.basic1};
  }

}

`;


