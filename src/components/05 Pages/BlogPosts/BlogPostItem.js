import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "../../../config";

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
        }, 1000);
      });
  });

  return (
    <>
      <div>{isLoading ? post.title : "Loading..."}</div>
    </>
  );
};

export default BlogPostItem;

export const Title = styled.div`
  color: white;
`;
