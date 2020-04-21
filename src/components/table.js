import React from 'react';
import styled from 'styled-components';

import time from '../data/time.json';

const Table = () => {

    const numlist = [0, 1, 2, 3, 4, 5, 6];

    const TableWrapper = styled.table`
    border-collapse: collapse;
    text-align:center;
    width:100%;
    vertical-align:middle;
    -webkit-user-select: none; 
    `

    const TableHeader = styled.tr`
    background-color:#E83C3D;
    width:20%;
    color:#ffffff;
    height:50px;
    font-size:18px;
    font-weight:bold;
    -webkit-user-drag:none;
    `

    const Daybox = styled.td`
    width:20%;
    `

    const TrWrapper = styled.tr`
    background-color:white;
    height:70px;
    padding:30px;
    font-size:13px;
    &:nth-child(even){
        background-color: #F1F1F1;
    }
    `

    const TdWrapper = styled.td`
    width:20%;
    transition: 0.5s all;
    &:hover{
        background-color:#d2d2d2;
        transition: 0.5s all;
    }
    `

    const SubjectEl = ({ subname, link }) => {

        const OpenURL = () => {
            if (link) {
                window.open(link, '_blank', 'nodeIntegration=no');
            }
        }

        return (
            <TdWrapper onDoubleClick={OpenURL}>
                {subname}
            </TdWrapper>
        )
    }

    return (
        <TableWrapper>
            <TableHeader>
                <Daybox>월</Daybox>
                <Daybox>화</Daybox>
                <Daybox>수</Daybox>
                <Daybox>목</Daybox>
                <Daybox>금</Daybox>
            </TableHeader>
            {
                numlist.map((n) => (
                    <TrWrapper>
                        {time[n].map(({ subname, link, idx }) => (
                            <SubjectEl
                                subname={subname}
                                link={link}
                                key={idx}
                            />)
                        )}
                    </TrWrapper>
                ))
            }
        </TableWrapper>
    )
}
export default Table;