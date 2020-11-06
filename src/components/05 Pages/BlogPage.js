import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThumbnailBlog from "../04 Organisms/BlogPage/ThumbnailBlog";
import { fonts } from "../01 Atoms/globalStyle";
import { media } from "../01 Atoms/MediaQueries";
import { colors, colorsRoles } from "../01 Atoms/Colors";
import { API_URL } from "../../config";
import parse from "html-react-parser";
import { pathblog } from "../01 Atoms/Data";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/posts", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTimeout(() => {
          setPosts(response);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  // var parse = require("html-react-parser");

  return (
    <>
      <BlogPageContainer>
        <Title>Blog</Title>

        {isLoading
          ? "Loading..."
          : posts.map((item, index) => (
              <ThumbnailBlog
                key={index}
                thumbnail={item.thumbnail[0].url}
                title={item.title}
                descriptionpost={parse(
                  item.Description.substring(0, 208) + "..."
                )}
                slug={pathblog + "/" + item.id}
              />
            ))}
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;

export const Title = styled.p``;

export const BlogPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.White};
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
  align-items: center;
  width: calc(100% - 80px);
`}

  ${Title} {
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
`;
