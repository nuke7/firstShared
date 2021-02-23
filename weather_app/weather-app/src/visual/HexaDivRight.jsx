import styled from "styled-components";

import TempMax from "./dataBlocks/TempMinMax";
import TempMain from "./dataBlocks/TempMain";
/* import FeelsLike  from "./dataBlocks/FeelsLike" */
import Pressure from "./dataBlocks/Pressure";
import Wind from "./dataBlocks/Wind";

// Styled Components

const DivRightStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);

  box-sizing: border-box;

  height: 90vh;
  width: 20vw;
  clip-path: polygon(0 17%, 100% 0%, 100% 100%, 0 83%);

  /* átmeneti, ide valszeg Grid kell */
  /* 
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: end; */

  display: grid;
  grid-template-rows: 18% 28% 34% 18%;
`;

const GridUpDiv = styled.div`
  padding-bottom: 10px;
  padding-right: 10px;

  grid-row: 1 / span 1;
  /*   background-color: green; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const GridMidUpDiv = styled.div`
  grid-row: 2 / span 1;
  /*   background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridMidDownDiv = styled.div`
  grid-row: 3 / span 1;
  /*   background-color: cyan; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridDownDiv = styled.div`
  grid-row: 4 / span 1;
  /*   background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function DivRight(props) {
  // props.weatherdata === ""
  //   ? console.log("load")
  //   : console.log(props.weatherData.main);

  return (
    <DivRightStyle>
      <GridUpDiv>
        <Pressure pressure={props.weatherData.main.pressure} />
      </GridUpDiv>

      <GridMidUpDiv>
        <TempMain
          tempMain={props.weatherData.main.temp}
          feelsTemp={props.weatherData.main.feels_like}
        />
      </GridMidUpDiv>

      <GridMidDownDiv>
        <Wind
          windSpeed={props.weatherData.wind.speed}
          windDeg={props.weatherData.wind.deg}
        ></Wind>
      </GridMidDownDiv>

      <GridDownDiv>
        <TempMax
          tempMax={props.weatherData.main.temp_max}
          tempMin={props.weatherData.main.temp_min}
        />
      </GridDownDiv>
    </DivRightStyle>
  );
}

export default DivRight;
