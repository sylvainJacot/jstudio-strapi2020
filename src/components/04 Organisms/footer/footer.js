import React from "react";
import styled from "styled-components";

export const FooterWapper = styled.footer`
display: block;
position: relative;
width: 100%;
height: 80px;
background-color: slateblue;
`;


const Footer = () => {
    return <>

        <FooterWapper><h1>Footer</h1></FooterWapper>

    </>

};


export default Footer;