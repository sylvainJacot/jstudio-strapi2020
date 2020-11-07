import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../../01 Atoms/globalStyle";
import { colorsRoles } from "../../01 Atoms/Colors";
import { media } from "../../01 Atoms/MediaQueries";
import { API_URL } from "../../../config";
import parse from "html-react-parser";
import BackButton from "../../02 Molecules/BackButton";

const BlogPostItem = () => {
  const { id } = useParams();
  let [post, setPost] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setPost(res);
          setIsLoading(true);
        }, 0);
      });
  });

  return (
    <>
      {isLoading ? (
        <>
          <BackButton />
          <PostItemPage>
            <Title>{post.title}</Title>
            <Creationtime time={post.createdAt}>
              <p>Posted the {new Date(post.createdAt).toLocaleDateString()}</p>
            </Creationtime>
            <PictureHeader src={post.thumbnail[0].url} />
            <PostItemContainer>
              <Content>{parse(post.content)}</Content>
            </PostItemContainer>
          </PostItemPage>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default BlogPostItem;

export const Title = styled.h1`
  position: relative;
  ${fonts.PlayFairDisplay};
  font-size: 4rem;
  line-height: 4rem;
  color: ${colorsRoles.DarkGrey};
  padding-top: 120px;
  margin: auto;
  text-align: center;
  margin-bottom: 48px;
  width: 80%;

  ${media.tablet`
    font-size: 6rem;
    line-height: 6rem;
    `}

  ${media.desktop`
  width: 50%;
  font-size: 6rem;
  line-height: 8rem;
  `}
`;

export const PictureHeader = styled.img`
  width: 70%;
  margin-bottom: 48px;
`;

export const Content = styled.div`
  position: relative;
  margin: auto;

  & h5 {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 3rem;
    color: ${colorsRoles.DarkGrey};
  }

  & h1 {
    position: relative;
    ${fonts.Roboto};
    font-weight: 800;
    font-style: bold;
    font-size: 3rem;
    color: ${colorsRoles.Brand02};
    margin: 2rem 0;
  }

  & h2 {
    position: relative;
    ${fonts.RobotoBold};
    font-weight: 800;
    font-size: 3rem;
    color: ${colorsRoles.Brand02}80;
    margin: 4rem 0;

    &::before {
      display: block;
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      transform: translateY(5rem);
      background-color: ${colorsRoles.LightGrey2};
    }
  }

  & p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.DarkGrey};
    letter-spacing: 0;
    line-height: 1.5;
    text-align: left;
    margin-bottom: 2rem;
  }

  & img {
    width: 100%;
    margin: 24px 0;
  }

  & a {
    color: ${colorsRoles.Brand02};
  }

  & blockquote {
    background-color: #2d353b;
    color: ${colorsRoles.LightGrey};
    padding: 8px;
  }

  & ul,
  & ol {
    margin: 16px 0;
    li {
      position: relative;
      ${fonts.Roboto};
      font-style: normal;
      font-size: 2rem;
      color: ${colorsRoles.DarkGrey};
      letter-spacing: 0;
      line-height: 2rem;
      text-align: left;
      opacity: 0.8;
      margin-bottom: 24px;
      margin-left: 24px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: red;
        transform: translate(50%, -50%);
        top: 50%;
        left: -24px;
        border-radius: 50%;
      }
    }
  }
`;

export const PostItemPage = styled.div`
  background-color: ${colorsRoles.White};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostItemContainer = styled.div`
  position: relative;
  width: 80%;
  box-shadow: 0 1px 4px 0 ${colorsRoles.Brand03}20;
  padding: 0 32px;
  ${fonts.Roboto};
  font-style: normal;
  font-size: 2rem;
  color: ${colorsRoles.DarkGrey};
  letter-spacing: 0;
  line-height: 1.5;
  text-align: left;
  margin: 24px 0;

  ${media.desktop`
  width: 50%;
  `}
`;

export const Creationtime = styled.time`
  & p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.DarkGrey2};
    margin-bottom: 80px;
  }
`;
