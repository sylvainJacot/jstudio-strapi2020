import React from "react";

import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";
import NavPhotoRetoucherProjects from "../04 Organisms/NavPhotoRetoucherProjects/NavPhotoRetoucherProjects"
import {SkillsAnimals} from "../01 Atoms/Images-UXUI";
import TemplateMethodo from "../04 Organisms/skillpage/TemplateMethodo";
import BackButton from "../02 Molecules/BackButton";



export const Box = styled.div`
position: relative;
${media.desktop`
margin-right: 80px;
`
}
`;


const PhotoRetoucherProjects = () => {
    return <>

        <Box>
            <BackButton/>
            <Skillheader
                mainTitle={"Photo Retoucher"}
                mainColor={colorsRoles.Brand03}
                srcMainImg={SkillsAnimals.Horse}
                description={"A retoucher needs to know the entire postproduction process to be able to deliver high-quality work. He also has to be able to appreciate the basic importance of how light falls; he needs a visual eye. Another key quality is  when working with someone new, it’s always best to communicate your ideas and thoughts early on. The faster you get to know each other, the faster you'll start creating amazing things."}
                Flipped={true}
                ClientsRetoucher
            />
            <TemplateMethodo isretoucher/>
            <NavPhotoRetoucherProjects />

        </Box>

    </>

};


export default PhotoRetoucherProjects;

