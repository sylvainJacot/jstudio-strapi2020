import React from "react";

import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";

import {SkillsAnimals} from "../01 Atoms/Images-UXUI";
import TemplateMethodo from "../04 Organisms/skillpage/TemplateMethodo";
import NavCreativeDeveloperProjects from "../04 Organisms/NavDeveloperProjects/NavCreativeDeveloperProjects";
import BackButton from "../02 Molecules/BackButton";



export const Box = styled.div`
position: relative;
${media.desktop`
margin-right: 80px;
`
}

`;


const CreativeDeveloperProjects = () => {
    return <>

        <Box>

            <BackButton/>
            <Skillheader
                mainTitle={"Creative Developer"}
                mainColor={colorsRoles.Brand02}
                srcMainImg={SkillsAnimals.Fox}
                description={"On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware. In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines."}
                Flipped={true}
                ClientsDeveloper
            />
            <TemplateMethodo
                BgLightMode={true}
                TextLightMode={false}
                iscreativedeveloper
            />
            <NavCreativeDeveloperProjects/>
        </Box>

    </>

};


export default CreativeDeveloperProjects;

