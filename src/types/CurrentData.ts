import { TIconName } from "components/ui/icon/icons-list";

export type TCurrentData = {
  temp?: string;
  weather?: string;
  city?: string;
  tempMin?: string;
  tempMax?: string;
  iconName?: TIconName;
};
