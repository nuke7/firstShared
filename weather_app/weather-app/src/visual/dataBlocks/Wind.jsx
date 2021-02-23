import styled from "styled-components";
import "../CSS/elements.css";

import { useState, useEffect } from "react";
import percentage from "../../utils/styled-percent";

const BigContainer = styled.div`
  width: 85%;
  height: 27vh;
  transform: translateY(0%) translateX(0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 5px;
  /*  border: 2px solid rgba(255, 255, 255, 0.8); */
  background-color: rgba(255, 255, 255, 0.3);
`;

const WindArrowContainer = styled.div`
  height: 17vh;
  width: 17vh;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: rgba(252, 252, 252, 0.5);
  /*  background-image: url(https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&h=350); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArrowDiv = styled.div`
  height: 17vh;
  width: 2vh;
  /* background-color: white; */
  transition: transform 1s ease-in-out;
  transform: rotate(${(props) => props.windDeg}deg);

  clip-path: polygon(50% 0, 100% 100%, 50% 83%, 0% 100%);
  background: linear-gradient(
    0deg,
    #000000 0%,
    #000000 48%,
    #750202 52%,
    #750202 100%
  );
`;

const WindDataDiv = styled.div`
  margin-top: 8px;
  font-size: 90%;
  color: #005780;
  text-shadow: 1px 1px 2px black;
`;

function Wind(props) {
  const [isWind, setWind] = useState(0);

  useEffect(() => {
    setWind(props.windDeg);
  }, [props]);

  console.log(isWind);
  return (
    <BigContainer className="background-and-textcolor">
      <WindArrowContainer>
        <ArrowDiv windDeg={isWind}></ArrowDiv>
      </WindArrowContainer>
      <WindDataDiv>
        <div>
          <span>Wind speed : </span>
          <span>{props.windSpeed}</span>
          <span> m/s</span>
        </div>
        <div>
          <span>Wind deg : </span>
          <span>{isWind}</span>
          <span>°</span>
        </div>
      </WindDataDiv>
    </BigContainer>
  );
}

export default Wind;
