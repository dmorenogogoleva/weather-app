import React from "react";
import { TCurrentData } from "types/CurrentData";
import { CURRENT_LOCATION, DEFAULT_VALUE } from "utils";

type HeaderProps = TCurrentData;

export const Header: React.FC<HeaderProps> = ({
  city = CURRENT_LOCATION,
  temp,
  tempMax,
  tempMin,
  weather,
}) => {
  return (
    <header className="header">
      <h1 className="location">{city}</h1>
      <span className="temp">{temp ?? DEFAULT_VALUE}</span>
      <p className="conditions">
        {weather ?? DEFAULT_VALUE}
        <br />
        H:{tempMax ?? DEFAULT_VALUE} L:{tempMin ?? DEFAULT_VALUE}
      </p>
    </header>
  );
};
