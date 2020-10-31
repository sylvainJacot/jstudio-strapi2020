import React from "react";

import {UIUXProjects} from "../01 Atoms/Data";
import UIUXDesignerProject from "./projects/UIUXDesignerProject";


const UiUxDesignProjectTemplate = ({match}) => {

    const uiuxproject = UIUXProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <UIUXDesignerProject
            headerImage={uiuxproject.headerImage}
            title={uiuxproject.title}
            description={uiuxproject.description}
            bgImage={uiuxproject.decorativeimage}
            sourceMobile={uiuxproject.backgroundpicture}
            titlerole={uiuxproject.titlerole}
            descriptionrole={uiuxproject.descriptionrole}
            roles={uiuxproject.roles}
            projects={uiuxproject.methodology}
            ImageProject={uiuxproject.images}
            mainColor={uiuxproject.maincolor}
        />

    </>

};

export default UiUxDesignProjectTemplate;