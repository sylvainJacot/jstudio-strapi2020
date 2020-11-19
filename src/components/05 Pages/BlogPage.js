import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThumbnailBlog from "../04 Organisms/BlogPage/ThumbnailBlog";
import { media } from "../01 Atoms/MediaQueries";
import parse from "html-react-parser";
import { pathblog } from "../01 Atoms/Data";
import AnimatedLogoJS from "../01 Atoms/animated-logojs";
import postsAPI from "../services/postsAPI";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // We create a function outside the useEffect hook because it cannot take "async"
  const fetchAllPosts = async () => {
    const data = await postsAPI.findAll();
    setPosts(data);
    setIsLoading(false);
  }

  // var parse = require("html-react-parser");

  return (
    <>
      <BlogPageContainer>
        {isLoading ? (
          <AnimatedLogoJS />
        ) : (
          posts.map((item, index) => (
            <ThumbnailBlog
              key={index}
              thumbnail={item.thumbnail[0].url}
              title={item.title}
              descriptionpost={parse(
                item.Description.substring(0, 208) + "..."
              )}
              slug={pathblog + "/" + item.slug}
            />
          ))
        )}
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;

export const BlogPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
  align-items: center;
  width: calc(100% - 80px);
`}
`;
