import React from "react";
import styled from "styled-components";
import { colors } from "../01 Atoms/Colors";
import ThumbnailBlog from "../04 Organisms/BlogPage/ThumbnailBlog";

const BlogPage = () => {
  return (
    <>
      <BlogPageContainer>
        <h1>Blog</h1>
        <ThumbnailBlog />
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;

export const BlogPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.White};
  display: flex;
  justify-content: center;
`;
