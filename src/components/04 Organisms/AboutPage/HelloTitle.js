import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import {media} from "../../01 Atoms/MediaQueries";
import PicPerso from "../../../media/img/ProflPic.png";

const HelloTitle = () => {
    return <>
    <HelloTitleWrapper>
        <PersonalPicture></PersonalPicture>
        <Text>
        <h3>Hello</h3>
        <BottomPart>
            <WordsMask>
                <ScrollingWords>
                    <p>World</p>
                    <p>You</p>
                    <p>Mom</p>
                </ScrollingWords>
            </WordsMask>
            <h3>!</h3>
        </BottomPart>
        </Text>
    </HelloTitleWrapper>
    </>

};

export default HelloTitle;

export const HelloTitleWrapper = styled.div`
position: relative;
font-family: 'Roboto';
font-weight: bold;
font-size: 15rem;
display: flex;
width: 260px;
padding-top: 80px;
transform: scale(.6);

${media.tablet`
transform: scale(.7);
`
}

${media.desktop`
transform: scale(.8);
width: 320px;
`
}


`;

export const PersonalPicture = styled.div`
position: absolute;
width: 224px;
height: 224px;
background-color: ${colorsRoles.LightGrey};
background-image: url(${PicPerso});
background-size: contain;
opacity: .3;
border-radius: 50%;
left: -112px;
z-index: 0;
`;

export const Text = styled.div`
position: relative;
`;

export const BottomPart = styled.div`
display: flex;
`;

export const WordsMask = styled.div`
height: 15rem;
max-width: 360px;
overflow: hidden;
`;

export const ScrollingWords = styled.div`
animation-name: Scrolling;
animation-duration: 8s;
animation-iteration-count: infinite;
& p {
display: inline-block;
font-family: 'Playfair Display', Serif;
font-size: 15rem;

&:nth-child(1) {
color: ${colorsRoles.Brand03}
}
&:nth-child(2) {
color: ${colorsRoles.Brand02}
}
&:nth-child(3) {
color: ${colorsRoles.Brand01}
}
}



@keyframes Scrolling {
0% {transform: translateY(-8px);
width: 360px;
}
12.5% {transform: translateY(-8px);
width: 360px;
}
25% {transform: translateY(-134px);
width: 222px;
}
37.5% {transform: translateY(-134px);
width: 222px;
}
50% {transform: translateY(-265px);
width: 295px;
}
62.5% {transform: translateY(-265px);
width: 295px;
}
75% {transform: translateY(-134px);
width: 222px;
}

100% {transform: translateY(-8px);
width: 360px;
}

}

`;




