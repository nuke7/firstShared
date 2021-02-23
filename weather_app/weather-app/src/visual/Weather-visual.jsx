import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
// import { defaultResponse } from "../components/defaultResponse";
import WeatherHeader from "./Weather-header";
import DivLeft from "./HexaDivLeft";
import DivRight from "./HexaDivRight";
import CircularProgress from "@material-ui/core/CircularProgress";

// styled Components
const CircularProgressStyled = styled(CircularProgress)`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 10%;
  max-width: 150px;
  margin: auto;
`;

const WeatherContainer = styled.div`
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  display: grid;
  grid-template-columns: 30% 40% 30%;
`;

const MiddleDiv = styled.div`
  grid-column: 2 / span 1;
  display: flex;
  justify-content: center;
`;

const LeftDiv = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: transform 1s;
  perspective: 800px;
  transform-style: preserve-3d;
  transform-origin: 0% 0%;

  transform: rotateY(${(props) => (props.open ? "80deg" : "0deg")});
`;

const RighDiv = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  transition: transform 1s;

  transform-origin: 100% 0%;

  transform: rotateY(${(props) => (props.open ? "80deg" : "0deg")});
`;

// function

export const WeatherVisual = (props) => {
  // let random = Math.floor(Math.random() * 9);
  let loading = typeof props.weather === "string";
  let picloading = typeof props.picData === "string";
  // const [pexelUrl, setPexelUrl] = useState("");
  // const [picData, setPicData] = useState(undefined);
  // const [picDataLoading, setPicDataLoading] = useState(false);

  /*   
    //! Pexels fetch start
  useEffect(() => {
    if (props.children)
      fetch(
      `https://api.pexels.com/v1/search?query=${props.children}&per_page=10`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: "563492ad6f917000010000013bf8371728434c5eb66ba1c29adc8949",
        },
      }
    )
      .then((response) => {
        if (response.status !== 200) return defaultResponse;
        return response.json();
      })
      .then((response) => {
        // console.log(response);
        setPicData(response);
      })
      .catch((err) => console.log(err));
  }, [props.children]);
  //! pexels fetch end
  */

  /*   const [isWeatherData, setWeatherData] = useState ("loading") */

  typeof props.weather !== "string" && console.log(props);
  /* typeof props.weather !== "string" && console.log(props.weather.main.temp) */

  const [isOpen, setOpen] = useState(false);

  return (
    <WeatherContainer
      background={
        props.picData && props.picData.id !== undefined
          ? props.picData.src.original
          : ""
      }
      onClick={() => setOpen(!isOpen)}
    >
      <MiddleDiv>
        <WeatherHeader cityName={loading ? props.weather : props.children} />
      </MiddleDiv>

      {loading && <CircularProgressStyled color="secondary" />}
      {picloading && <CircularProgressStyled color="secondary" />}

      {typeof props.weather !== "string" && (
        <Fragment>
          <LeftDiv open={isOpen}>
            <DivLeft weatherData={props.weather} />
          </LeftDiv>

          <RighDiv open={isOpen}>
            <DivRight weatherData={props.weather} />
          </RighDiv>
        </Fragment>
      )}

      {/*   <DivLeft weatherData={typeof props.weather !== "string" ? props.weather :""}/> */}

      {/*   {typeof props.weather !== "string" &&
        Object.keys(props.weather).map((key, index) => (
          <div key={`${key}-${index}`}>
            {key}
            <span>
              {typeof props.weather[key] !== "object" ? props.weather[key] : ""}
            </span>
          </div>
        ))} */}
    </WeatherContainer>
  );
};
