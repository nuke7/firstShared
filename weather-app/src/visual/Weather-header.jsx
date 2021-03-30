import { Fragment } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  font-size: 5vh;
  color: white;
  text-shadow: 0 0 5px black;
  /*   -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
  -webkit-text-fill-color: transparent; */
  filter: blur(1px);
`;

function WeatherHeader(props) {
  return (
    <Fragment>
      <HeaderDiv>
        <h2>{props.cityName}</h2>
      </HeaderDiv>
    </Fragment>
  );
}

export default WeatherHeader;
