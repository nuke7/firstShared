import styled from "styled-components";
import { useState, useEffect } from "react";
import percentage from "../../utils/styled-percent";

import "../CSS/elements.css";

const TempContainer = styled.div`
  /*  background-color: rgba(255, 255, 255, 0.3);
  
  font-size: 150%;
  color: white;
  text-shadow: 1px 1px 1px blue; */

  /*   border: 3px solid white; */
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.5);

  width: 85%;
  height: 25vh;
  transform: translateY(0%) translateX(0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 5px;
`;

const TemperatureDiv = styled.div`
  font-size: 8vh;
  transform: scaleY(1.2);
  margin-bottom: 1rem;
  transition: color 0.5s;
  color: rgb(${(props) => props.redPercent}, 0, ${(props) => props.bluePercent});
  ::after {
    font-size: 6vh;
    font-weight: bold;
    content: "°C";
  }
`;

const FeelsDiv = styled.div`
  color: #550dc9;
  font-weight: bolder;
  text-shadow: 1px 1px 5px white;
`;

function TempMain(props) {
  const [isPercent, setPercent] = useState(50);

  const minTemp = 0;
  const maxTemp = 30;

  /* function percentage(min, max, current) {
    if (current <= min) {
      return 0;
    } else if (current >= max) {
      return 100;
    } else {
      return ((current - min) / (max - min)) * 100;
    }
  } */
  /* console.log("try percent");
  console.log(percentage(minTemp, maxTemp, props.tempMain));
 */
  useEffect(() => {
    setPercent(percentage(minTemp, maxTemp, props.tempMain));
  }, [props]);

  return (
    <TempContainer className="background-and-textcolor">
      <TemperatureDiv redPercent={isPercent * 2.5} bluePercent={255 - isPercent * 2.5}>
        {props.tempMain.toFixed(1)}{" "}
      </TemperatureDiv>
      <FeelsDiv>
        <span>Feels Like : </span>
        <span>{props.feelsTemp} </span>
        <span>°C</span>
      </FeelsDiv>
    </TempContainer>
  );
}

export default TempMain;
