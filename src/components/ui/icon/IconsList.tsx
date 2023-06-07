import { HeavyRain } from "./svg/HeavyRain";
import { LightRain } from "./svg/LightRain";
import { NightCloudy } from "./svg/NightCloudy";
import { Rain } from "./svg/Rain";
import { Thunder } from "./svg/Thunder";

export const iconsList = {
  rain: Rain,
  "heavy-rain": HeavyRain,
  "light-rain": LightRain,
  "night-cloudy": NightCloudy,
  thunder: Thunder,
};

export type TIconName = keyof typeof iconsList;
