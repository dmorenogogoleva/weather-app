import React, { ReactNode } from "react";

import styles from "./Card.module.css";

import { buildClassName } from "utils";
import { Icon } from "../icon";

interface CardProps {
  title: string;
  children: ReactNode;
  kind?: "horizontal" | "vertical";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  kind = "vertical",
  className,
}) => {
  return (
    <section className={buildClassName(styles.card, className)}>
      <h2 className="title-h2">
        <Icon name="calendar" />
        {title}
      </h2>
      <div className={styles[`list-${[kind]}`]}>{children}</div>
    </section>
  );
};
