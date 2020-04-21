import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const Wrapper = styled.div`
    position:fixed;
    width:100%;
    height:35px;
    bottom:0;
    background-color: #363636;
    z-index:-1;
    `

    return (
        <Wrapper />
    )
}
export default Footer;