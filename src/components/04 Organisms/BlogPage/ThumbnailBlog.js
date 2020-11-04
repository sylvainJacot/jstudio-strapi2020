import React from "react";
import styled from "styled-components";
import { colors, colorsRoles } from "../../01 Atoms/Colors";
import Button from "../../02 Molecules/Button";
import { media } from "../../01 Atoms/MediaQueries";
import { fonts } from "../../01 Atoms/globalStyle";
import test from "../../../media/img/Projects/03_Photo Retoucher/HOTELMARRAKECH/H_Almaha-Folio01.png";

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
          description
          <Button label={"Read this article"} pathname={props.slug} lightmode />
        </ContentText>
      </ThumbnailBlogContainer>
    </>
  );
};

export default ThumbnailBlog;

export const ThumbnailBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 160px;
  width: 80%;
`;

export const ContentText = styled.div`
  /* margin-left: 80px; */
  width: 100%;
  display: inline-block;
  max-height: 160px;
  & h1 {
    position: relative;
    ${fonts.PlayFairDisplay};
    font-size: 4rem;
    line-height: 48px;
    color: ${colorsRoles.DarkGrey};
    margin-top: 40px;
    margin-bottom: 16px;
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
  /* width: 468px;
  height: 282px; */
  width: 280px;
  height: 170px;
  background-color: ${colors.LightGrey2};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 10px 16px 1px rgba(0, 0, 0, 0.08);

  ${media.tablet`
    width: 468px;
  height: 282px;
  `}

  & img {
    width: 100%;
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
