import { TIconName } from "components/ui/icon/icons-list";

export type TIntervalData = {
  id: string;
  temp?: string;
  weather?: string;
  humidity?: number;
  time?: string;
  iconName?: TIconName;
};
