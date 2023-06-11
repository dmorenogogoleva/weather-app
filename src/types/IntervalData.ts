import { TIconName } from "components/ui/icon/icons-list";

export type TIntervalData = {
  id: string;
  temp?: number;
  weather?: string;
  humidity?: number;
  time?: string;
  iconName?: TIconName;
};
