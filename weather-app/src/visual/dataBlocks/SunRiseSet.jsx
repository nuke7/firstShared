import styled from "styled-components";
import { formattedTime } from "../../utils/utils";
import "../CSS/elements.css";

const SunContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.3);
  font-size: 150%;
  color: white;
  text-shadow: 1px 1px 1px blue; */

  width: 100%;
  height: 50%;

  /*   transform: translateY(30%) translateX(0%); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*   ::after {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 5px;
    transform: translateY(250%);
  } */
`;

const SunriseContainer = styled.div`
  /*   transform: translateX(5%); */
  margin: 5px;
  background: linear-gradient(
    90deg,
    rgba(218, 157, 33, 1) 1%,
    rgba(218, 104, 33, 1) 44%,
    rgba(218, 0, 0, 1) 78%,
    rgba(13, 10, 213, 1) 100%
  );
`;

const SunsetContainer = styled.div`
  transform: translateX();
  padding-left: 15%;
  width: 100%;
  margin: 5px;
  background: linear-gradient(
    -90deg,
    rgba(218, 157, 33, 1) 1%,
    rgba(218, 104, 33, 1) 45%,
    rgba(218, 0, 0, 1) 60%,
    #0300a5 85%
  );
`;

function SunRiseSet(props) {
  return (
    <SunContainer className="background-and-textcolor">
      <SunriseContainer>
        <span>Sunrise: </span>
        <span>{formattedTime(props.sunRise)}</span>
      </SunriseContainer>

      <SunsetContainer>
        <span>Sunset: </span>

        <span>{formattedTime(props.sunSet)}</span>
      </SunsetContainer>
    </SunContainer>
  );
}

export default SunRiseSet;
