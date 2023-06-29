import { TIconName } from "components/ui/icon/icons-list";

export type TCurrentData = {
  temp?: number;
  weather?: string;
  city?: string;
  tempMin?: number;
  tempMax?: number;
  iconName?: TIconName;
};
