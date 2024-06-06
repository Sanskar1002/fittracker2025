import React, { useState } from "react";
import styled from "styled-components";
import Gym from "../components/Gym";
import Yoga from "../components/Yoga";

const PageHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  background: #323233;
  padding: 20px;
`;
const Choice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
`;

const DispalyTut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify:content:center;
  width: 100%;
`;
const Tutorials = () => {
  const [isYoga, setYoga] = useState(false);
  const [isGym, setGym] = useState(false);

  function handleYogaClick() {
    setYoga(true);
    setGym(false);
  }
  function handleGymClick() {
    setGym(true);
    setYoga(false);
  }
  return (
    <Wrapper>
      <PageHeading>Tutorials for Yoga & Gym</PageHeading>
      <Choice>
        <Button onClick={handleYogaClick}>Yoga</Button>
        <Button onClick={handleGymClick}>Gym</Button>
      </Choice>

      <DispalyTut>
        {isYoga && <Yoga></Yoga>}
        {isGym && <Gym></Gym>}
      </DispalyTut>
    </Wrapper>
  );
};

export default Tutorials;
