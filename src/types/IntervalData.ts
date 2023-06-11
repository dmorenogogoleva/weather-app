import { TIconName } from "components/ui/icon/icons-list";

export type TIntervalData = {
  id: string;
  temp?: number;
  weather?: string;
  precip?: number;
  time: string;
  iconName?: TIconName;
};
