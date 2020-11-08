import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, colorsRoles } from "../../01 Atoms/Colors";
import { media } from "../../01 Atoms/MediaQueries";
import { fonts } from "../../01 Atoms/globalStyle";
import { transitions } from "../../01 Atoms/Animations";

const ThumbnailBlog = (props) => {
  return (
    <>
      <StyledLink to={props.slug}>
        <ThumbnailBlogContainer>
          <ThumbnailPicture thumbnailimg={props.thumbnail}>
            <ThumbnailPictureNav>
              <Bullet bgcolor={colorsRoles.Brand01}></Bullet>
              <Bullet bgcolor={colorsRoles.Brand02}></Bullet>
              <Bullet bgcolor={colorsRoles.Brand03}></Bullet>
            </ThumbnailPictureNav>
          </ThumbnailPicture>

          <ContentText>
            <h1>{props.title}</h1>
            {props.descriptionpost}
          </ContentText>
        </ThumbnailBlogContainer>
      </StyledLink>
    </>
  );
};

export default ThumbnailBlog;

export const ThumbnailBlogContainer = styled.div`
  position: relative;
  width: 280px;
  display: flex;
  align-items: flex-end;
  margin-top: 80px;

  ${media.tablet`
  margin-top: 160px;
  width: 640px;
  `}

  ${media.desktopL`
  width: 800px;
  `}
`;

export const ContentText = styled.div`
  /* margin-left: 80px; */
  width: 100%;
  display: inline-block;
  position: relative;
  transition: ${transitions.basic1};

  & h1 {
    position: relative;
    ${fonts.PlayFairDisplay};
    font-size: 4rem;
    line-height: 4rem;
    color: ${colorsRoles.DarkGrey};
    width: 72%;
    margin-top: 88px;

    ${media.tablet`
    width: 64%;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 78px;
    `}

    ${media.desktop`
    font-size: 5rem;
    line-height: 5rem;
    flex-direction: unset;
    align-items: unset;
    margin-top: 98px;
    `}

    ${media.desktopL`
    margin-top:116px;
    `}
  }

  & p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.DarkGrey};
    letter-spacing: 0;
    line-height: 1.5;
    text-align: left;
    margin: 4rem 0 2rem 0;
  }
`;

export const ThumbnailPicture = styled.div`
  position: absolute;
  width: 240px;
  height: 0;
  padding-bottom: calc(240px * 0.33);
  background-color: ${colorsRoles.LightGrey};
  background-image: url("${(props) => props.thumbnailimg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${colors.LightGrey2};
  box-shadow: 0px 10px 16px 1px rgba(0, 0, 0, 0.08);
  right: 0;
  top: 0;
  border-radius: 0 0 2rem 2rem;
  transition: ${transitions.basic1};

  ${media.tablet`
  width: 320px;
  padding-bottom: calc(320px * 0.33);
  `}

  ${media.desktop`
  width: 400px;
  padding-bottom: calc(400px * 0.33);
  `};
  ${media.desktopL`
  width: 468px;
  padding-bottom: calc(468px * 0.33);
  `};
`;

export const ThumbnailPictureNav = styled.div`
  position: absolute;
  top: -24px;
  height: 24px;
  width: 100%;
  background-color: ${colors.LightGrey2};
  display: flex;
  align-items: center;
  border-radius: 2rem 2rem 0 0;

  ${media.tablet`
  top: -40px;
  height: 40px;
  width: 100%;
  `}
`;

export const Bullet = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 50%;
  margin-left: 8px;
  &:first-child {
    margin-left: 8px;
    ${media.tablet`
    margin-left: 16px;
    `}
  }

  ${media.tablet`
  width: 12px;
  height: 12px;
  `}
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  &:hover {
    cursor: pointer;
    ${ThumbnailPicture} {
      transform: translate3d(32px, -32px, 0);
      transition: ${transitions.basic1};
    }
    ${ContentText} {
      transform: translate3d(-32px, 32px, 0);
      transition: ${transitions.basic1};
    }
  }
`;
