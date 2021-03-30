import styled from "styled-components";

import SunRiseSet from "./dataBlocks/SunRiseSet";
import MainWeather from "./dataBlocks/MainWeather";
import Humidity from "./dataBlocks/Humidity";
import ZombieMeter from "./dataBlocks/ZombieMeter";

// Styled Components

const DivleftStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);

  box-sizing: border-box;

  height: 90vh;
  width: 20vw;
  clip-path: polygon(0 0%, 100% 17%, 100% 83%, 0 100%);

  display: grid;

  grid-template-rows: 20% 35% 27% 18%;
`;

const GridUpDiv = styled.div`
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
  /* background-color: cyan; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridDownDiv = styled.div`
  grid-row: 4 / span 1;
  /*  background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

// Function

function DivLeft(props) {
  /*   props.weatherdata === ""
    ? console.log("load")
    : console.log(props.weatherData.sys);
 */
  return (
    <DivleftStyle>
      <GridUpDiv>
        <SunRiseSet
          sunSet={props.weatherData.sys.sunset + props.weatherData.timezone}
          sunRise={props.weatherData.sys.sunrise + props.weatherData.timezone}
        />
      </GridUpDiv>
      .
      <GridMidUpDiv>
        <MainWeather
          main={props.weatherData.weather[0].main}
          description={props.weatherData.weather[0].description}
          icon={props.weatherData.weather[0].icon}
        />
      </GridMidUpDiv>
      <GridMidDownDiv>
        <ZombieMeter props={props.weatherData.main.humidity}></ZombieMeter>
      </GridMidDownDiv>
      <GridDownDiv>
        <Humidity humidity={props.weatherData.main.humidity} />
      </GridDownDiv>
    </DivleftStyle>
  );
}

export default DivLeft;
