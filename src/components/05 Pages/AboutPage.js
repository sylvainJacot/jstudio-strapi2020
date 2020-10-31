import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../01 Atoms/Colors";
import {transitions} from "../01 Atoms/Animations";
import {media} from "../01 Atoms/MediaQueries";
import HelloTitle from "../04 Organisms/AboutPage/HelloTitle";
import MailTo from "../02 Molecules/MailTo";


const AboutPage = (props) => {
    return <>

        <AboutPageWrapper isabout={props.value}>
            <AboutContent>
                <HelloTitle/>
                <TextContent>
                    <p>I’m Sylvain, UX/UI Designer, creative developer and photo retoucher. Nice to meet you !</p>

                    <p>I’m the guy who makes sure your product is set apart from the competition by creating engaging user interfaces and bringing products to life.  My preference is developing with React and styled component for interactive websites. Learning is what really drives me, that’s why I love to share & learn from my teammates.</p>

                    <p>Have an exciting project where you need some help?<br/>
                    Send me over an email, and let's chat.</p>
                </TextContent>
                <MailTo
                    email={"jct.sylvain@gmail.com"}
                    subject={"First contact"}
                    body={"Hi Sylvain, how are you today?"}
                    label={"Send me over an email"}
                />
            </AboutContent>
        </AboutPageWrapper>
        <OverlayBg onClick={props.onClick} isabout={props.value}/>

    </>

};


export default AboutPage;

export const AboutPageWrapper = styled.div`
content-visibility: auto;
position: fixed;
top: ${props => props.isabout ? "0px" : "-100%"};
z-index: 2;
width: 100%;
height: 100%;
transition: ${transitions.basic1};
display: flex;
flex-direction: column;
align-content: center;
background-color: ${colorsRoles.White};
overflow: scroll;

${media.desktop`
width: 80%;
top: 0;
right: ${props => props.isabout ? "0px" : "-100%"};
`
}

& h1 {
font-size: 40px;
color: ${colorsRoles.White};
}
`;


export const AboutContent = styled.div`
width: inherit;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

${media.desktop`
 margin-left: 80px;
`}

`;

export const TextContent = styled.div`
padding: 0 16px 0 16px;
width: 288px;
color: ${colorsRoles.DarkGrey};

& p {
font-family: 'Roboto', sans-serif;
font-size: 2rem;
line-height: 1.5;
margin-bottom: 3rem;

${media.desktop`
  text-align: justify;
  text-justify: inter-word;
`}
}

${media.tablet`
width: 400px;
`}

${media.desktop`
width: 560px;
`}

`;

export const OverlayBg = styled.div`
position: fixed;
content: "";
display: ${props => props.isabout ? "block" : "none"};
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.DarkGrey};
opacity: ${props => props.isabout ? ".80" : "0"};
cursor: pointer;

`;