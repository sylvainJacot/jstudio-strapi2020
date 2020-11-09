import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../../01 Atoms/globalStyle";
import { colorsRoles } from "../../01 Atoms/Colors";
import { media } from "../../01 Atoms/MediaQueries";
import { API_URL } from "../../../config";
import parse from "html-react-parser";
import BackButton from "../../02 Molecules/BackButton";
import AnimatedLogoJS from "../../01 Atoms/animated-logojs";

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
            <PictureHeader headerimg={post.thumbnail[0].url} />
            <PostItemContainer>
              <Content>{parse(post.content)}</Content>
            </PostItemContainer>
          </PostItemPage>
        </>
      ) : (
        <AnimatedLogoJS/>
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
  margin-bottom: 24px;
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

export const PictureHeader = styled.div`
  width: 280px;
  height: 0;
  padding-bottom: 33.33%;
  background-image: url("${(props) => props.headerimg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 16px;
  border-radius: 8px;

  ${media.mobileL`
  width: 90%;
  `}
  ${media.tablet`
  width: 80%;
  `}
  ${media.desktop`
  width: 70%;
  margin-bottom: 32px;
  `}
`;

export const Content = styled.div`
  position: relative;
  margin: auto;

  & h2 {
    position: relative;
    ${fonts.Roboto};
    font-weight: 800;
    font-style: bold;
    font-size: 3rem;
    color: ${colorsRoles.Brand02};
    margin: 2rem 0;
  }

  & h3 {
    position: relative;
    ${fonts.RobotoBold};
    font-weight: 800;
    font-size: 3rem;
    color: ${colorsRoles.Brand02}80;
    margin: 12rem 0 4rem 0;

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
  & h4 {
    position: relative;
    ${fonts.RobotoBold};
    font-weight: 800;
    font-size: 3rem;
    color: ${colorsRoles.DarkGrey};
    margin-bottom: 2rem;
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

  & strong {
    font-weight: 800;
  }

  & img {
    width: 100%;
    margin: 24px 0;
    border-radius: 8px;
  }

  & a {
    color: ${colorsRoles.Brand02};
  }

  & blockquote {
    background-color: #2d353b;
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 16px;

    p {
      color: ${colorsRoles.LightGrey};
      margin-bottom: 0;
    }
  }

  & ul {
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

  & ol {
    counter-reset: section;
    list-style-type: none;
    padding-left: 37px;
    li {
      position: relative;
      margin-bottom: 16px;

      &::before {
        position: absolute;
        counter-increment: section;
        content: counters(section, ".") " ";
        left: -28.5px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        color: ${colorsRoles.Brand02};
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 24px;
        height: 24px;
        background-color: ${colorsRoles.Brand02}30;
        transform: translate(50%, -50%);
        top: 50%;
        left: -48px;
        border-radius: 50%;
        z-index: 0;
      }
    }
  }
`;

export const PostItemPage = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
  width: calc(100% - 80px);
  `}
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
  border-radius: 8px;
  padding-top: 16px;

  ${media.desktop`
  width: 50%;
  padding-top: 40px;
  `}
`;

export const Creationtime = styled.time`
  & p {
    ${fonts.Roboto};
    font-style: normal;
    font-size: 2rem;
    color: ${colorsRoles.DarkGrey2};
    margin-bottom: 24px;

    ${media.desktop`
    margin-bottom: 40px;
    `}
  }
`;
