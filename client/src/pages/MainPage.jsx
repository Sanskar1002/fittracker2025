import { ThemeProvider, styled } from "styled-components";
import logo1 from "../utils/Images/logo1.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import App2 from "./App2";
import Authentication from "./Authentication";
import { useState, useEffect, useRef } from "react";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

// import "./style.css";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #111111;
  gap: 30px;
`;

// const Navlink = styled(NavLink)`
//   color: red;
// `;
const Logo = styled.img`
  height: 300px;
  width: 300px;

  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }
`;
const AppName = styled.h1`
  font-size: 100px;
  margin: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const TagLine = styled.p`
  font-size: 50px;
  padding: 10px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 20px;
  color: #fcaf0a;
  font-size: 20px;
  background-color: #4d4c4c;
  border-radius: 30px;
  border: none;

  &:hover {
    color: #4d4c4c;
    background-color: #fcaf0a;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 20px;
  }
`;

const TEXTS = ["Track", "Learn", "Thrive"];
function MainPage() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `;

  const CopyRight = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 15px 0px;
    text-align: center;
  `;
  // const {}
  return (
    <>
      {show ? (
        <Main>
          <Container>
            <Logo src={logo1} />
            <AppName>
              FitTrackr
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
              {""}
            </AppName>
          </Container>
          <TagLine>
            {" "}
            Fuel Your{" "}
            <span style={{ color: "#fcaf0a", fontWeight: "bold" }}>
              Vigor
            </span>{" "}
            , Track Your{" "}
            <span style={{ color: "#fcaf0a", fontWeight: "bold" }}>
              Journey
            </span>
          </TagLine>
          <Button onClick={() => setShow(!show)}>Lets Gooo !!</Button>
          <CopyRight>
            <p>copyright © 2024 FitTrackr</p>
            <p>All Rights Reserved</p>
          </CopyRight>
        </Main>
      ) : (
        <Authentication />
      )}
    </>
  );
}

export default MainPage;
