import React from "react";

import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";

import {SkillsAnimals} from "../01 Atoms/Images-UXUI";
import TemplateMethodo from "../04 Organisms/skillpage/TemplateMethodo";
import NavUxUIProjects from "../04 Organisms/NavUxUIProjects/NavUxUIProjects";
import BackButton from "../02 Molecules/BackButton";


export const Box = styled.div`
position: relative;
${media.desktop`
margin-right: 80px;
`
}
`;


const UxUiProjects = () => {
    return <>

        <Box>
            <BackButton/>
            <Skillheader
                mainTitle={"UX/UI Designer"}
                mainColor={colorsRoles.Brand01}
                srcMainImg={SkillsAnimals.Parrot}
                description={"I'm primarily concerned with how the product feels. " +
                "By identifying verbal and non-verbal stumbling blocks, I refine and iterate to create the “best” user experience. " +
                "When I'm designing user interfaces, I tend to put myself in the user’s shoes, anticipating what they expect at each stage. I then use this empathy to design visual, interactive elements that respond in a way that feels natural to the user."}
                Flipped={false}
                ClientsUXUI/>
            <TemplateMethodo
                isuiuxdesigner
            />
            <NavUxUIProjects/>
        </Box>

    </>

};


export default UxUiProjects;

