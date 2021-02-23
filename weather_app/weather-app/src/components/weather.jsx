import { Fragment } from "react";
/* import styled from "styled-components"; */

export const Weather = (props) => {
  const loading = typeof props.weather === "string";

  console.log(props);
  return (
    <Fragment>
      <h2>{loading ? props.weather : props.children}</h2>

      {typeof props.weather !== "string" &&
        Object.keys(props.weather).map((key, index) => (
          <div key={`${key}-${index}`}>
            {key}
            <span>
              {typeof props.weather[key] !== "object" ? props.weather[key] : ""}
            </span>
          </div>
        ))}
    </Fragment>
  );
};
