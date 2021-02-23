import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import "../CSS/elements.css";

const TempContainer = styled.div`
  /*   background-color: rgba(255, 255, 255, 0.3);
  font-size: 150%;
  text-shadow: 1px 1px 1px blue; */

  color: #ffbc42;
  width: 80%;
  height: 20vh;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.4);

  /*   transform: translateY(10%) translateX(0%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherIcon = styled.img`
  height: 20vh;
  margin-bottom: -5vh;
  margin-top: -3vh;
  /*  background-color: red; */
`;

function MainWeather(props) {
  const [isIcon, setIcon] = useState("https://openweathermap.org/img/w/02d.png");

  useEffect(() => {
    setIcon(`https://openweathermap.org/img/w/${props.icon}.png`);
  }, [props]);

  console.log(isIcon);
  return (
    <TempContainer className="background-and-textcolor">
      <div>
        <WeatherIcon src={isIcon} alt="sa" />
      </div>

      {/*  <div>
        <span> {props.main} </span>
      </div> */}
      <div>
        <span> {props.description} </span>
      </div>
    </TempContainer>
  );
}

export default MainWeather;
