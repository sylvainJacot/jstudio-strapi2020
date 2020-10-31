import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/MediaQueries";
import {colorsRoles} from "../../01 Atoms/Colors";
import MethodoImage from "../../02 Molecules/methodoImage";
import {fonts} from "../../01 Atoms/globalStyle";
import {MainMethodoUXUI, MainMethodoDeveloper, MainMethodoRetoucher} from "../../01 Atoms/Data";

export const TemplateMethodoWrapper = styled.section`
background-color: ${colorsRoles.White};
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 0;

${media.desktop`
padding: 80px 0 120px 0;
`}

 h1 {
position: relative;
${fonts.PlayFairDisplay};
font-size: 4rem;
line-height: 48px;
color: ${colorsRoles.DarkGrey};
margin-bottom: 40px;
text-align: center;
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
`;

export const MethodoImagesWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

${media.desktop`

flex-wrap: no-wrap;
`}

`;


const TemplateMethodo = ( props ) => {



    return <>
        <TemplateMethodoWrapper>
            <h1>{props.isproject ? "Workflow" : "Favourite workflow"}</h1>
                <MethodoImagesWrapper>

                    {props.isuiuxdesigner &&  MainMethodoUXUI.map((item, index) => (

                        <MethodoImage
                            key={index}
                            sourceMobile={item.logo}
                            methodTitle={item.title}
                        />
                    ))
                    }

                    {props.iscreativedeveloper &&  MainMethodoDeveloper.map((item, index) => (

                        <MethodoImage
                            key={index}
                            sourceMobile={item.logo}
                            methodTitle={item.title}
                        />
                    ))
                    }

                    {props.isretoucher &&  MainMethodoRetoucher.map((item, index) => (

                        <MethodoImage
                            key={index}
                            sourceMobile={item.logo}
                            methodTitle={item.title}
                        />
                    ))
                    }

                    {props.isproject && props.projects.map((item, index) => (

                        <MethodoImage
                            key={index}
                            sourceMobile={item.logo}
                            methodTitle={item.title}
                        />
                    ))
                    }


                </MethodoImagesWrapper>
        </TemplateMethodoWrapper>
    </>

};

export default TemplateMethodo;

