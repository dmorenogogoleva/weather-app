import React from "react";
import { TIconName, iconsList } from "./icons-list";

interface IconProps {
  name: TIconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  return iconsList[name]();
};
