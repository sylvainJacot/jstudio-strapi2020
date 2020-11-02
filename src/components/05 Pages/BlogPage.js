import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThumbnailBlog from "../04 Organisms/BlogPage/ThumbnailBlog";
import { fonts } from "../01 Atoms/globalStyle";
import { media } from "../01 Atoms/MediaQueries";
import { colors, colorsRoles } from "../01 Atoms/Colors";
import { API_URL } from "../../config";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/blog-posts", {
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
        }, 0);
      });
  }, []);

  // const handleContent = (y) => {
  //   JSON.parse(y);
  // };

  return (
    <>
      <BlogPageContainer>
        <h1>Blog</h1>

        {isLoading
          ? "Loading..."
          : posts.map((item, index) => (
              <ThumbnailBlog
                key={index}
                Cover={item.cover.url}
                MainTitlePost={item.MainTitlePost}
                content={ThumbnailBlog.insertAdjacentHTML('afterbegin', `<div id="box></div>`)}
              />
            ))}
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;

export const BlogPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.White};
  padding: 64px 16px 0px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.desktop`
width: calc(100% - 80px);
`}

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
`;
