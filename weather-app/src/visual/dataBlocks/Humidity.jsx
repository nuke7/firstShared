import styled from "styled-components";
import "../CSS/elements.css";

import { useState, useEffect } from "react";
import percentage from "../../utils/styled-percent";

const HumContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 65%;

  color: rgba(10, 10, 255, 0.7);
  transform: translateY(5%) translateX(-5%) scale(1.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 2px;
  font-size: 150%;
  text-shadow: 0 0 1px black;
`;

const HumDiv = styled.div`
  transform: translateX(0) translateY(0%) scale(0.9);
  margin: 5px;
`;

const HUmPicDiv = styled.div`
  background-color: red;

  background-image: url("https://dostmann-electronic.de/themes/frontend/img/themenbilder/dostmann-electronic-feuchte.jpg");
  background-size: 70px;
  transition: 1s;
  height: 7px;
  width: ${(props) => props.percent}%;
  margin-top: 5px;

  box-shadow: 0px 0px 5px black;
  border-radius: 2px;
`;

function Humidity(props) {
  const [isPercent, setPercent] = useState(50);
  const minHum = 45;
  const maxHum = 100;

  useEffect(() => {
    setPercent(percentage(minHum, maxHum, props.humidity));
  }, [props]);

  return (
    <HumContainer>
      <HumDiv>
        <span> Humidity : {props.humidity} % </span>
        <HUmPicDiv percent={isPercent / 1.6}></HUmPicDiv>
      </HumDiv>
    </HumContainer>
  );
}

export default Humidity;
