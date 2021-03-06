import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Simboli1, Simboli2, Simboli3 } from '../Simboli';
import moji from 'randmoji';

interface Props {
    index: number,
    index2: number,
    index3: number,
}

const Card = ({index, index2, index3}: Props) => {

    if(index === -1) {
        return (
            <>
                <CardStyle>
                    <h1 className="emoji">❌❌❌</h1>
                    <h1>TIRA LA LEVA PER COMINCIARE.</h1>
                </CardStyle>
            </>
        )
    } else {
        if(Simboli1[index] === Simboli2[index2] && Simboli2[index2] === Simboli3[index3]) {
            return (
                <>
                    <CardStyle>
                        <h1 className="emoji">{Simboli1[index]} {Simboli2[index2]} {Simboli3[index3]}</h1>
                        <h1> COMBINAZIONE. </h1>
                    </CardStyle>
                </>
            )
        } else {
            return (
                <>
                    <CardStyle>
                        <h1 className="emoji">{Simboli1[index]} {Simboli2[index2]} {Simboli3[index3]}</h1>
                        <h1> NON UNA COMBINAZIONE. </h1>
                    </CardStyle>
                </>
            )
        }
    }
}

const CardStyle = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    padding: 1.5rem 0;
    text-align: center;
    line-height: 3.5rem;
    border: 1px solid black;
    width: 50%;
    background-color: #fff;
    * {
        background-color: #fff;
    }
    margin-bottom: 1rem;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 400px) {
        .emoji {
            font-size: 1rem;
        }
        h1 {
            line-height: 2rem;
            font-size: 0.8rem;
        }
    }
`

export default Card
