import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import db from "../Firebase";
import { Simboli1 } from "../Simboli";
import Nav from "./Nav";

const Slot = () => {
  //   const [points, setPoints] = useState(0);

  // const addPoints = (value: number) => {
  //     setPoints(points + value);
  // }

  // db.collection('points').add({
  //     points: points
  // })

  // console.log(points);
  let [index1, setIndex1] = useState(-1);
  let [index2, setIndex2] = useState(-1);
  let [index3, setIndex3] = useState(-1);
  let [index4, setIndex4] = useState(-1);
  let [index5, setIndex5] = useState(-1);
  let [index6, setIndex6] = useState(-1);
  let [index7, setIndex7] = useState(-1);
  let [index8, setIndex8] = useState(-1);
  let [index9, setIndex9] = useState(-1);

  let [data, setData] = useState([]);

  const ref = db.collection("test");

  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <SlotMachine>
        <Nav />
        <Card index={index1} index2={index2} index3={index3} />
        <Card index={index4} index2={index5} index3={index6} />
        <Card index={index7} index2={index8} index3={index9} />

        <Genera
          onClick={() => {
            setIndex1(Math.floor(Math.random() * Simboli1.length));
            setIndex2(Math.floor(Math.random() * Simboli1.length));
            setIndex3(Math.floor(Math.random() * Simboli1.length));
            setIndex4(Math.floor(Math.random() * Simboli1.length));
            setIndex5(Math.floor(Math.random() * Simboli1.length));
            setIndex6(Math.floor(Math.random() * Simboli1.length));
            setIndex7(Math.floor(Math.random() * Simboli1.length));
            setIndex8(Math.floor(Math.random() * Simboli1.length));
            setIndex9(Math.floor(Math.random() * Simboli1.length));
          }}
        >
          Tira la leva.
        </Genera>
      </SlotMachine>
    </>
  );
};

const SlotMachine = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const Genera = styled.button`
  margin-top: 3rem;
  padding: 2rem 5rem;
  background: pink;
  border: transparent;
  border-radius: 20px;
  width: 20%;
  font-family: "Poppins", sans-serif;
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
`;

export default Slot;
