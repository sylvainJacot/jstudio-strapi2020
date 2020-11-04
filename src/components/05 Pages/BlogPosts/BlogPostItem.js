import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "../../../config";

const BlogPostItem = () => {
  const { id } = useParams();
  let [post, setPost] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/blog-posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
        setIsLoading(true);
      });
  });

  return (
    <>
      <div>
        {
          (isLoading = true ? (
            <Title>{post.MainTitlePost}</Title>
          ) : (
            "Loading..."
          ))
        }
      </div>
    </>
  );
};

export default BlogPostItem;

export const Title = styled.div`
  color: white;
`;
