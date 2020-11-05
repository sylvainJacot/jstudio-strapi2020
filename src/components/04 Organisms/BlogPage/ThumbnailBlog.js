import React from "react";
import styled from "styled-components";
import { colors, colorsRoles } from "../../01 Atoms/Colors";
import Button from "../../02 Molecules/Button";
import { media } from "../../01 Atoms/MediaQueries";
import { fonts } from "../../01 Atoms/globalStyle";

const ThumbnailBlog = (props) => {
  return (
    <>
      <ThumbnailBlogContainer>
        <ThumbnailPicture>
          <ThumbnailPictureNav>
            <Bullet bgcolor={colorsRoles.Brand01}></Bullet>
            <Bullet bgcolor={colorsRoles.Brand02}></Bullet>
            <Bullet bgcolor={colorsRoles.Brand03}></Bullet>
          </ThumbnailPictureNav>
          <img src={props.thumbnail} alt="test" />
        </ThumbnailPicture>

        <ContentText>
          <h1>{props.title}</h1>
          {props.descriptionpost}
          <Button label={"Read this article"} pathname={props.slug} lightmode />
        </ContentText>
      </ThumbnailBlogContainer>
    </>
  );
};

export default ThumbnailBlog;

export const ThumbnailBlogContainer = styled.div`
  position: relative;
  margin-top: 160px;
  width: 800px;
  height: 533px;
  display: flex;
  align-items: flex-end;
`;

export const ContentText = styled.div`
  /* margin-left: 80px; */
  width: 100%;
  display: inline-block;
  position: relative;

  & h1 {
    position: relative;
    ${fonts.PlayFairDisplay};
    font-size: 4rem;
    line-height: 48px;
    color: ${colorsRoles.DarkGrey};

    ${media.desktop`
    font-size: 8rem;
    line-height: 8rem;
    flex-direction: unset;
    align-items: unset;
    width: 504px;
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
    width: 800px;
    max-height: 72px;
    margin: 4rem 0 2rem 0;
  }
`;

export const ThumbnailPicture = styled.div`
  position: absolute;
  width: 468px;
  height: 293px;
  background-color: ${colors.LightGrey2};
  box-shadow: 0px 10px 16px 1px rgba(0, 0, 0, 0.08);
  right: 0;
  top: 0;
  overflow: hidden;
  border-radius: 1rem;

  & img {
    width: 100%;
    height: 100%;
    background-color: white;
  }
`;

export const ThumbnailPictureNav = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${colors.LightGrey2};
  display: flex;
  align-items: center;
`;

export const Bullet = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 50%;
  margin-left: 8px;
  &:first-child {
    margin-left: 16px;
  }
`;
