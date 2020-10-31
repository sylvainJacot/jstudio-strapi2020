import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import {colorsRoles} from "../../01 Atoms/Colors";
import {LogoJacotStudio, IcLinkedin, IcInstagram, IcWhatsapp, IcGitHub} from "../../01 Atoms/Icons";
import IcBurgerMenu from "../../01 Atoms/Icons";
import {transitions} from "../../01 Atoms/Animations";
import {media} from "../../01 Atoms/MediaQueries";
import {pathdev, pathphoto, pathuiux} from "../../01 Atoms/Data";
import {UserContext} from "../../Hooks/Providers/Context";
import AboutPage from "../../05 Pages/AboutPage";


export const StyledLink = styled(Link)`
order:1;
`;
export const HeaderWrapper = styled.header`
color: white;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
right: 0;
left: 0;
top: 0;
width: auto;
height: 64px;
z-index: 3;
background-color: ${props => props.isabouton ?  colorsRoles.White : colorsRoles.DarkGrey};
padding: 0 16px;
transition: ${transitions.basic1};

& > button {
  order: 3;
  
  ${media.desktop`
    order: 2;
  `}
}

${media.desktop `
width: 80px;
height: unset;
padding: 32px 0;
right: 0;
bottom: 0;
left: unset;
flex-direction: column;
`}

&::after {
display: block;
position: absolute;
z-index: -1;
content: "";
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.White}10;
}
${media.desktop `
    &:hover {
width: 144px;
transition: ${transitions.basic2};

  & div > span {
  height: 32px;
  transition: ${transitions.basic1};
  transition-delay: .1s;
   &:nth-child(2) {
   margin: 0 16px;
   }
  } 

}
`}


`;
export const SocialsWrapper = styled.ul`
display: flex;
order: 2;
${media.desktop`
display: flex;
flex-direction: column;
order: 3;
`}

a {
margin: 0px 8px;

${media.mobileL`
margin: 0px 16px;
`}

${media.desktop`
    margin-bottom: 32px;
        &:last-child {
        margin-bottom: 0px;
        }
`}
}


`;


const HeaderNavigation = (props) => {

    const {value, setValue} = useContext(UserContext);

    const HandleToggle = () =>
        setValue(!value);

    const CloseAbout = () =>
        setValue(false);

    let menuColor = value ? colorsRoles.DarkGrey : colorsRoles.White;

    let Location = useLocation();
    let SlugUiUx = useRouteMatch(pathuiux+"/:slug");
    let SlugDev = useRouteMatch(pathdev+"/:slug");
    let SlugPhoto = useRouteMatch(pathphoto+"/:slug");

    const [color, setColor] = useState("black")

    const HandleColorChange = () => {
        setColor(
            pathuiux === Location.pathname || SlugUiUx
                ? colorsRoles.Brand01
                : pathdev === Location.pathname || SlugDev
                ? colorsRoles.Brand02
                : pathphoto === Location.pathname || SlugPhoto
                    ? colorsRoles.Brand03
                    :colorsRoles.LightGrey
        )
    }

    useEffect(() => {
        HandleColorChange();
    })

    return <>
        <HeaderWrapper isabouton={value}>

                <StyledLink to={"/"} onClick={CloseAbout}>
                    <h1>
                        <LogoJacotStudio FillColor={menuColor} CircleColor={value ? colorsRoles.LightGrey : color} Size={"40px"}/>
                    </h1>
                </StyledLink>

                <IcBurgerMenu onClick={HandleToggle} isabouton={menuColor}/>

                <SocialsWrapper>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sylvain-jacot">
                        <IcLinkedin FillColor={menuColor} Size={"24px"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.link/l3orm8">
                        <IcWhatsapp FillColor={menuColor} Size={"24px"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sylvainJacot">
                        <IcGitHub FillColor={menuColor} Size={"24px"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/el_jacot/">
                        <IcInstagram FillColor={menuColor} Size={"24px"}/>
                    </a>
                </SocialsWrapper>



        </HeaderWrapper>
            <AboutPage
                onClick={HandleToggle}
                value={value}
            />
    </>
};


export default HeaderNavigation;