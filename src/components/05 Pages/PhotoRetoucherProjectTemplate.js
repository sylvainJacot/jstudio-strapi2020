import React from "react";
import PhotoRetoucherProject from "./projects/PhotoRetoucherProject";
import {PhotoRetoucherProjects} from "../01 Atoms/Data";



const PhotoRetoucherProjectTemplate = ({match}) => {

    const photoretoucherproject = PhotoRetoucherProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <PhotoRetoucherProject
            title={photoretoucherproject.title}
            roles={photoretoucherproject.roles}
            description={photoretoucherproject.description}
            pictureItem={photoretoucherproject.images}
            headerdeco={photoretoucherproject.headerImage}
        />

    </>

};

export default PhotoRetoucherProjectTemplate;