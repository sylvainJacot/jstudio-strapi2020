import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/MediaQueries";
import {colorsRoles} from "../../01 Atoms/Colors";
import ShortDescription from "./shortdescription";
import {fonts} from "../../01 Atoms/globalStyle";


export const Box = styled.div`

background-color: ${colorsRoles.White};
padding: 32px 0;

${media.desktop`
padding: ${props => props.photoRetoucher? "96px 0 96px 0" : "80px 0 24px 0"};
`}

& h1 {
position: relative;
${fonts.PlayFairDisplay};
font-size: 4rem;
line-height: 32px;
color: ${colorsRoles.DarkGrey};
margin-bottom: 40px;
text-align: center;
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
}

`;
export const ShortDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

${media.desktop`
flex-direction: row;
align-items: unset;
justify-content: center;
`};

`;


const ProjectMainTitle = (props) => {

    const roles = props.roles;

    return <>
            <Box photoRetoucher={props.photoRetoucher}>
                  <h1>{props.title}</h1>

                  <ShortDescriptionWrapper>

                            {roles.map((item,index) => (
                                <ShortDescription
                                    key={index}
                                    title={item.titlerole}
                                    description={item.descriptionrole}
                                />
                            ))

                            }

                  </ShortDescriptionWrapper>
            </Box>
        </>

};

export default ProjectMainTitle;


