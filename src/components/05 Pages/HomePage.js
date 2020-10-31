import React, {useContext} from "react";
import styled from "styled-components";
import {media} from "../01 Atoms/MediaQueries";
import {transitions} from "../01 Atoms/Animations";
import Skillsnavitem from "../04 Organisms/skillsnav/skillsnavitem";
import {Skills} from "../01 Atoms/Data";
import {UserContext} from "../Hooks/Providers/Context";


export const SkillsNavWrapper = styled.nav`
margin-top: 64px;


${media.desktop`
margin-top: unset;
margin-right: 80px;
`}
`;

export const SkillsNavList = styled.ul`
}
${media.desktop`
display: flex;
`}

&:hover > * {${media.desktop`
opacity: 0.4;
transition: ${transitions.basic2};
`}
  
 &:hover {${media.desktop`
opacity: 1;
transition: ${transitions.basic2};

`}
 
}

`;

const HomePage = () => {

    const {value} = useContext(UserContext);

        return <>
              <SkillsNavWrapper value={value}>
                    <SkillsNavList>

                        {
                            Skills.map((skillItem, index) =>

                                <Skillsnavitem
                                    key={index}
                                    title={skillItem.titleNav}
                                    quote={skillItem.quote}
                                    colorBrand={skillItem.mainColor}
                                    bottomGradient={skillItem.mainGradient}
                                    altImg={skillItem.altMainImg}
                                    label={skillItem.labelCTA}
                                    src={skillItem.srcMainImg}
                                    pathname={skillItem.pathname}
                                />

                            )
                        }

                    </SkillsNavList>

               </SkillsNavWrapper>
            </>


};


export default HomePage;


