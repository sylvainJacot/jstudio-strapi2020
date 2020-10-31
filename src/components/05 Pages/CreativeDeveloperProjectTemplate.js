import React from "react";
import CreativeDeveloperProject from "./projects/CreativeDeveloperProject";
import {CreativeDeveloperProjects} from "../01 Atoms/Data";


const CreativeDeveloperProjectTemplate = ({match}) => {

    const creativeDeveloperproject = CreativeDeveloperProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <CreativeDeveloperProject
            headerImage={creativeDeveloperproject.headerImage}
            title={creativeDeveloperproject.title}
            description={creativeDeveloperproject.description}
            bgImage={creativeDeveloperproject.decorativeimage}
            sourceMobile={creativeDeveloperproject.backgroundpicture}
            titlerole={creativeDeveloperproject.titlerole}
            descriptionrole={creativeDeveloperproject.descriptionrole}
            roles={creativeDeveloperproject.roles}
            projects={creativeDeveloperproject.methodology}
            ImageProject={creativeDeveloperproject.images}
            mainColor={creativeDeveloperproject.maincolor}
        />

    </>

};

export default CreativeDeveloperProjectTemplate;