import styled from "styled-components";
import "../CSS/elements.css";

import percentage from "../../utils/styled-percent";
import { useState, useEffect } from "react";

const PressContainer = styled.div`
  text-align: center;

  width: 100%;
  height: 40%;
  transform: translateX(15%) translateY(0) scale(0.9);

  font-size: 150%;

  color: black;
  text-shadow: 1px 1px 3px blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PresDiv = styled.div`
  transition: transform 0.5s;
  transform: translateX(0%) translateY(0%)
    scaleY(${(props) => props.pressurePercentage});
  margin: -3px;
`;

const ArrowDiv = styled.div`
  transition: transform 0.5s;
  transform: translateX(0%) translateY(0%)
    scaleY(${(props) => props.pressurePercentage}); ;
`;

function Pressure(props) {
  const [isPercent, setPercent] = useState(50);

  const minPressure = 1010;
  const maxPressure = 1030;

  useEffect(() => {
    setPercent(percentage(minPressure, maxPressure, props.pressure));
  }, [props]);

  return (
    <PressContainer>
      <ArrowDiv pressurePercentage={(125 - isPercent / 2) / 100}>
        <span>↓↓↓↓↓↓↓↓↓↓↓</span>
      </ArrowDiv>
      <PresDiv pressurePercentage={(75 + isPercent / 2) / 100}>
        <span>Pressure: {props.pressure} hPa</span>
      </PresDiv>
    </PressContainer>
  );
}

export default Pressure;
