import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../../01 Atoms/Colors";
import {fonts} from "../../../01 Atoms/globalStyle";
import {transitions} from "../../../01 Atoms/Animations";


const CodeSandBoxItem = (props) => {
    return <>
        <Wrapper href={props.href} target={"_blank"}>
            <img src={props.src} alt={props.alt}/>
            <Label><p>{props.label}</p></Label>
        </Wrapper>
    </>

};

export default CodeSandBoxItem;

export const Label = styled.div`
width: 100%;
height: 40px;
background-color: ${colorsRoles.DarkGrey};
display: flex;
justify-content: center;
align-items: center;
transition: ${transitions.basic2};

    & p {
        display: inline-block;
        ${fonts.Roboto};
        font-size: 2rem;
        color: ${colorsRoles.White};
    }


`;

export const Wrapper = styled.a`
display: block;
position: relative;
width: 240px;
height: 168px;
background-color: ${colorsRoles.DarkGrey};
border-radius: 16px;
overflow: hidden;
cursor: pointer;
margin: 16px;
box-shadow: -1px 11px 25px -5px ${colorsRoles.DarkGrey}90;
transition: ${transitions.basic1};
    & img {
    width: 100%;
    } 
    &:hover {
        transform: translateY(-8px);
        transition: ${transitions.basic2};
        ${Label} {
            height: 48px;
            transform: translateY(-8px);
            transition: ${transitions.basic1};
        }
    }

`;

