import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorsRoles } from "../../01 Atoms/Colors";
import { fonts } from "../../01 Atoms/globalStyle";

const BlogCTA = (props) => {
  return (
    <>
      <StyledLink to={props.pathname}>
        <CTAContainer>
          <span>Blog</span>
        </CTAContainer>
      </StyledLink>
    </>
  );
};

export default BlogCTA;

export const StyledLink = styled(Link)``;

export const CTAContainer = styled.div`
  /* transform: rotate(-90deg); */
  background-color: ${colorsRoles.White};
  width: 40px;
  display: flex;
  flex-direction: center;

  & span {
    ${fonts.RobotoBold}
    color: black;
  }
`;
