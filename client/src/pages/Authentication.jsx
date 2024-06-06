import React, { useState } from "react";
import styled from "styled-components";
// import LogoImage from "../utils/Images/Logo.png";
import logo1 from "../utils/Images/logo1.png";
import AuthImage1 from "../utils/Images/AuthImage1.jpeg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;

  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
// const Logo = styled.img`
//   position: absolute;
//   width: 70px;
//   top: 40px;
//   left: 60px;
//   z-index: 10;
// `;
const Logo = styled.img`
  width: 70px;
`;

const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  // background-image: url(${AuthImage1});
  // background-position: center;
  // background-repeat: no-repeat;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: #5b86e5;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const AppName = styled.div`
  text-align: center;
  position: relative;
  font-size: 3em;
  color: #0e3742;

  width: 100%;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  line-height: 0.7em;
  animation: animate1 5s linear infinite;
  outline: none;

  @keyframes animate1 {
    0%,
    18%,
    20%,
    50.1%,
    60.1%,
    65.1%,
    80%,
    90.1%,
    92% {
      color: #0e3742;
      text-shadow: none;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: #fff;
      text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
        0 0 80px #03bcf4, 0 0 160px #03bcf4;
    }
  }
`;
const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        {/* <Logo src={logo1} /> */}
        <Image src={AuthImage1} />
      </Left>
      <Right>
        {!login ? (
          <>
            <Logo src={logo1} />

            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            {/* <AppName>FitTrackr</AppName> */}
            <Logo src={logo1} />
            FitTrackr
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
