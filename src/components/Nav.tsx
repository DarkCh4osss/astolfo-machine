import React, {useState} from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <div>
            { toggle ?            
                <>
                    <Burger onClick={() => setToggle(!toggle)}>
                        <motion.div className="line1" animate={{rotate: '-45deg', y: '20px'}}></motion.div>
                        <motion.div className="line2" animate={{rotate: '45deg'}}></motion.div>
                    </Burger>

                    <NavBar>
                        <Container animate={{x: '-100%'}}>
                            <NavLinks>
                                <h3  onClick={() => auth.signOut()}>Logout</h3>
                                <h5>Giocatore Corrente:</h5>
                                <LogoutInfo className="info-player">
                                    <Avatar src={user?.photoURL as any}  alt="user avatar"/>
                                    <div className="testo">
                                        <h6>{user?.displayName}</h6>
                                    </div>
                                </LogoutInfo>
                            </NavLinks>
                        </Container>               
                    </NavBar>
                </>
            :  
                <>
                    <Burger onClick={() => setToggle(!toggle)}>
                        <motion.div className="line1" animate={{rotate: '0deg'}}></motion.div>
                        <motion.div className="line2" animate={{rotate: '0deg'}}></motion.div>
                    </Burger>

                    <NavBar>
                        <Container animate={{x: '100%'}}>
                            <NavLinks>
                                <h3>Logout</h3>
                            </NavLinks>
                        </Container>               
                    </NavBar> 
                </> 
            }
        </div>
    )
}

export default Nav

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 100%;
    transform: translate(0%, 0%);
    width: 20%;
    height: 100%;
    background: white;
    opacity: 1;
`

const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: white;
`

const NavLinks = styled.ul`
    font-size: 50px;
    flex-basis: 30rem;
    cursor: pointer;
    a {
        color: black;
    }
    h3 {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: pink;
        }
    }
    h5 {
        background: white;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
    }
`

const Burger = styled.div`
    opacity: 1;
    cursor: pointer;
    position: absolute;
    top: 2.5%;
    left: 93%;
    z-index: 10;
    background: transparent;
    .line1,
    .line2 {
        width: 4.5rem;
        height: 0.2rem;
        margin: 1rem;
        background: black;
        pointer-events: none;
    }   
`

const LogoutInfo = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    h6 {
        background-color: #fff;
        padding-left: 2rem;
        font-size: 1.3rem;
        font-weight: 600;
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
`