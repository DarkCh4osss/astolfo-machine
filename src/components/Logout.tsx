import React from 'react';
import styled from 'styled-components';
import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Logout = () => {
    const [user] = useAuthState(auth);

    return (
        <LogoutSec>
            <h2>Giocatore Corrente:</h2>
            <LogoutInfo className="info-player">
                <Avatar onClick={() => auth.signOut()} src={user?.photoURL as any}  alt="user avatar"/>
                <div className="testo">
                    <h3>{user?.displayName}</h3>
                    <p>Clicca sulla foto per effettuare il logout</p>
                </div>
            </LogoutInfo>
        </LogoutSec>
    )
}

const LogoutSec = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    .testo {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: left;
    }
`

const LogoutInfo = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    h3 {
        padding-left: 2rem;
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    cursor: pointer;
`

export default Logout
