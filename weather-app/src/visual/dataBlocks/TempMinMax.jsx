import styled from "styled-components";
import "../CSS/elements.css";

const TempContainer = styled.div`
  font-size: 150%;

  width: 100%;
  height: 50%;
  transform: translateY(10%) translateX(0%);
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  text-shadow: 1px 1px 3px white;
`;

const TempMaxContainer = styled.div`
  transform: translateX(10%);
  margin: 5px;
  color: #eb2828;
`;

const TempMinContainer = styled.div`
  transform: translateX(40%);
  margin: 5px;
  color: #230e81;
`;

function TempMax(props) {
  return (
    <TempContainer>
      <TempMaxContainer>
        <span>Temp Max: {props.tempMax} </span>
        <span>°C</span>
      </TempMaxContainer>
      <TempMinContainer>
        <span>Temp Min: {props.tempMin} </span>
        <span>°C</span>
      </TempMinContainer>
    </TempContainer>
  );
}

export default TempMax;
