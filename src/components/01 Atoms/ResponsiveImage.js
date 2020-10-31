import React from 'react';




const ResponsiveImage = (props) => {
    return <>
        <picture >
            <source
                srcSet={props.sourceDesktop}
                media={"(min-width: " + props.breakPoint + "px)"}
            />
            <img
                src={props.sourceMobile}
                alt={props.altImage}
                srcSet={props.sourceMobile}
            />
        </picture>

    </>

};

export default ResponsiveImage;