import React, { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
//import { db } from '../Firebase';
import { Simboli } from '../Simboli';
import Nav from './Nav';

const Slot = () => {
    let [index1, setIndex1] = useState(-1);

    /*let [data, setData] = useState([]);

    const ref = db.collection('test');

    const getData = () => {
      ref.onSnapshot((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
      });
    }

    useEffect(() => {
      getData();
    }, []);

    console.log(data);*/
    
  return (
    <>  
      <SlotMachine>
        <Nav />
        <Card index={index1}/>

        <Genera onClick={() => {
              setIndex1(Math.floor(Math.random() * Simboli.length));
        }}>Tira la leva.</Genera> 
      </SlotMachine>
    </>  
  );
}

const SlotMachine = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`

const Genera = styled.button`
  margin-top: 10rem;
  padding: 2rem 5rem;
  background: pink;
  border: transparent;
  border-radius: 20px;
  width: 20%;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
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
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 7rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0rem 3rem;
    font-size: 1rem;
  }
`

export default Slot
