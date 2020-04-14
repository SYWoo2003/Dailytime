import React from 'react';
import styled from 'styled-components';

import closeicon from '../assets/closeicon.png';

const Frame = () => {

    const Framediv = styled.div`
    -webkit-user-select: none;
    -webkit-app-region: drag;
    width:770px;
    height:25px;
    background-color: #1A1D21;
    position:fixed;
    margin-right:30px;
    `


    const CloseWrapper = styled.button`
    width:30px;
    height:25px;
    background-color: #1A1D21;
    position:fixed;
    border:0;
    outline:0;
    z-index:1;
    right:0;
    -webkit-user-drag: none;
    &:hover{
        background-color: #d40234;
        outline:none;
    }
    `

    const Closeimg = styled.img`
    -webkit-user-drag: none;
    `

    const Close = () => {
        window.close();
    }


    const CloseBTN = () => {
        return (
            <CloseWrapper onClick={Close} >
                <Closeimg src={closeicon} />
            </CloseWrapper>
        )
    }

    return (
        <>
            <CloseBTN />
            <Framediv />

        </>
    )
}
export default Frame;