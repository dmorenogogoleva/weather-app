import React from "react";

interface HeaderProps {
  current?: any;
}

export const Header: React.FC<HeaderProps> = ({ current }) => {
  return (
    <div className="header">
      <div className="location">{current.location.name}</div>
      <div className="temp">{current.temp}</div>
      <div className="conditions">
        {current.cond == 0
          ? "Sunny"
          : current.cond == 1
          ? "Partly Cloudy"
          : current.cond == 2
          ? "Cloudy"
          : current.cond == 3
          ? "Light Rain"
          : current.cond == 4
          ? "Rain"
          : current.cond == 5
          ? "Heavy Rain"
          : current.cond == 6
          ? "Thunder"
          : ""}
        <br />
        H:{current.range.max} L:{current.range.min}
      </div>
    </div>
  );
};
