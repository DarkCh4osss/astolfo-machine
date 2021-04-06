import React from 'react'
import styled from 'styled-components';

const TitleBar = () => {
    return (
        <Title>🎰 <span>ASTOLFO</span> MACHINE 🎰</Title>
    )
}

const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    span {
    color: pink;
    background-color: #fff;
    }
    padding: 30px 0;
    text-align: center;
    letter-spacing: 2px;
    background-color: #fff;
    margin-bottom: 30px;

    @media screen and (max-width: 400px) {
        font-size: 1.4rem;
    }
`

export default TitleBar
