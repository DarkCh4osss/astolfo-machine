import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../Firebase';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import astolfoimg from '../img/astolfoimg.png'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch((err) => alert(err.message));
    }

    return (
        <>
            <Sect>
                <h2>CLICCA SUL BOTTONE PER EFFETTUARE IL LOGIN.</h2>
                {/*<LoginBtn onClick={signIn}>LOGIN CON GOOGLE.</LoginBtn>*/}
                <FontAwesomeIcon onClick={signIn} icon={faGoogle} className="google-icon" />
                <p>Google</p>
            </Sect>

            <Astolfo>
                <img src={astolfoimg} alt="astolfo" />
            </Astolfo>
        </>
    )
}

const Sect = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        padding: 2rem 0rem;
        font-family: 'Poppins', sans-serif;
    }
    .google-icon {
        font-size: 3rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: pink;
        }
    }
    p {
        font-family: 'Poppins', sans-serif;
    }
`

// eslint-disable-next-line
const LoginBtn = styled.button`
    padding: 2rem 5rem;
    background: pink;
    border: transparent;
    border-radius: 20px;
    width: 20%;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: transparent;
        border: 1px solid pink;
        color: pink;
        a {
            background: transparent;
            color: pink;
            text-decoration: none;
        }
    }
    a {
        background: pink;
        color: #fff;
        text-decoration: none;
    }
`

const Astolfo = styled.div`
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(400%, 55%);
`

export default Login
