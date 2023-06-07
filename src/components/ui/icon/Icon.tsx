import React from "react";
import { TIconName, iconsList } from "./IconsList";

interface IconProps {
  name: TIconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  return iconsList[name]();
};
