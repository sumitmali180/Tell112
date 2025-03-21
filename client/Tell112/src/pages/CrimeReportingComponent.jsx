import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const tapeSlideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const CrimeTapeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: #1a1a1a;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const YellowTape = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 150%;
  height: 60px;
  background: repeating-linear-gradient(
    45deg,
    #ffcc00,
    #ffcc00 10px,
    #ffdd44 10px,
    #ffdd44 20px
  );
  transform: rotate(-5deg);
  animation: ${tapeSlideIn} 1.5s ease-in-out forwards;
`;

const TitleText = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${textFadeIn} 1.5s ease-in-out 0.5s forwards;
`;

const SubtitleText = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  color: #ccc;
  text-align: center;
  opacity: 0;
  animation: ${textFadeIn} 1.5s ease-in-out 0.8s forwards;
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ffdd44;
  }
`;

// Main Component
const CrimeReportingComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    alert("Redirecting to the crime reporting section!");
  };

  return (
    <CrimeTapeContainer>
      <YellowTape />
      <TitleText>Crime Reporting</TitleText>
      <SubtitleText>
        Report incidents anonymously and help make your community safer.
      </SubtitleText>
      <Button onClick={handleButtonClick}>Report Now</Button>
    </CrimeTapeContainer>
  );
};

export default CrimeReportingComponent;