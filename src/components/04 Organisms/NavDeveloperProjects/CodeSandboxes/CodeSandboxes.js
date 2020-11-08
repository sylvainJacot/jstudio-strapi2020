import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colorsRoles } from "../../../01 Atoms/Colors";
import CodeSandBoxItem from "./CodeSandBoxItem";
import { fonts } from "../../../01 Atoms/globalStyle";
import CodeSandBox from "../../../../media/icons/methodology/code-sandbox.svg";
import { API_URL } from "../../../../config";
import { media } from "../../../01 Atoms/MediaQueries";

const CodeSandboxes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [codesandboxes, setCodesandboxes] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/codesandboxes", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTimeout(() => {
          setCodesandboxes(response);
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <h2>CodeSanbox Section</h2>
        <CodeSandoxItems>
          {isLoading
            ? "Loading ..."
            : codesandboxes.map((item, index) => (
                <CodeSandBoxItem
                  key={index}
                  href={item.link}
                  src={item.thumbnail.url}
                  alt={item.alt}
                  label={item.label}
                />
              ))}
        </CodeSandoxItems>
      </Wrapper>
    </>
  );
};

export default CodeSandboxes;

export const Wrapper = styled.div`
  background-color: ${colorsRoles.LightGrey2};
  text-align: center;
  padding: 80px 0px;

  & h2 {
    width: 50%;
    position: relative;
    display: inline-block;
    ${fonts.RobotoBold};
    font-weight: 800;
    font-size: 5rem;
    text-align: center;
    padding: 40px 0;
    line-height: 1.3;
    ${media.tablet`
    width: unset;
    `};

    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      background-image: url(${CodeSandBox});
      background-size: contain;
      background-repeat: no-repeat;
      left: -56px;
    }
  }
`;

export const CodeSandoxItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
