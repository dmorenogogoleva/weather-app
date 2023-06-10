import React, { ReactNode } from "react";

import styles from "./CardSmall.module.css";

interface CardSmallProps {
  title: string;
  children: ReactNode;
}

export const CardSmall: React.FC<CardSmallProps> = ({ title, children }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-title">{title}</h2>
      <div className={styles.list}>{children}</div>
    </div>
  );
};
