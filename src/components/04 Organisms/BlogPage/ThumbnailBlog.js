import React from "react";
import styled from "styled-components";
import { colors, colorsRoles } from "../../01 Atoms/Colors";
import Button from "../../02 Molecules/Button";
import { media } from "../../01 Atoms/MediaQueries";
import { fonts } from "../../01 Atoms/globalStyle";

const ThumbnailBlog = () => {
  return (
    <>
      <ThumbnailBlogContainer>
        <ThumbnailPicture>
          <ThumbnailPictureNav>
            <Bullet bgcolor={colorsRoles.Brand01}></Bullet>
            <Bullet bgcolor={colorsRoles.Brand02}></Bullet>
            <Bullet bgcolor={colorsRoles.Brand03}></Bullet>
          </ThumbnailPictureNav>
          <img src={""} />
        </ThumbnailPicture>

        <ContentText>
          <h1>Titre de l'article</h1>
          <p>Description de l'article</p>
          <Button label={"Read this article"} pathname={"/"} lightmode />
        </ContentText>
      </ThumbnailBlogContainer>
    </>
  );
};

export default ThumbnailBlog;

export const ThumbnailBlogContainer = styled.div`
  display: flex;
`;

export const ContentText = styled.div`
margin-left: 80px;
  & h1 {
    position: relative;
    ${fonts.PlayFairDisplay};
    font-size: 4rem;
    line-height: 48px;
    color: ${colorsRoles.DarkGrey};
    ${media.desktop`
    font-size: 6rem;
    line-height: 84px;
    flex-direction: unset;
    align-items: unset;
    `}
  }

  & p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.DarkGrey};
    letter-spacing: 0;
    line-height: 1.5;
    margin-bottom: 8px;
    text-align: left;
  }
`;

export const ThumbnailPicture = styled.div`
  position: relative;
  width: 468px;
  height: 282px;
  background-color: ${colors.LightGrey2};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 10px 16px 1px rgba(0, 0, 0, 0.08);

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
