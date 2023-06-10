import React from "react";
import { TCurrentData } from "types/CurrentData";
import { CURRENT_LOCATION, DEFAULT_VALUE } from "utils";

import styles from "./Header.module.css";

type HeaderProps = TCurrentData;

export const Header: React.FC<HeaderProps> = ({
  city = CURRENT_LOCATION,
  temp,
  tempMax,
  tempMin,
  weather,
}) => {
  return (
    <header className={styles.header}>
      <h1 className="title-h1">{city}</h1>
      <span className={styles.temp}>{temp || DEFAULT_VALUE}</span>
      <span className={styles.description}>{weather ?? DEFAULT_VALUE}</span>
      <span className={styles.range}>
        <span>H:{tempMax || DEFAULT_VALUE}</span>
        <span>L:{tempMin || DEFAULT_VALUE}</span>
      </span>
    </header>
  );
};
