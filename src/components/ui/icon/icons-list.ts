import { ClearSky } from "./svg/ClearSky";
import { Clouds } from "./svg/Clouds";
import { Fog } from "./svg/Fog";
import { HeavyRain } from "./svg/HeavyRain";
import { LightRain } from "./svg/LightRain";
import { NightCloudy } from "./svg/NightCloudy";
import { Rain } from "./svg/Rain";
import { Snow } from "./svg/Snow";
import { Thunder } from "./svg/Thunder";

export const strictCodeIcons: Record<string, TIconName> = {
  500: "light-rain",
  502: "heavy-rain",
  801: "clouds",
  802: "clouds",
  803: "clouds",
  804: "clouds",
};

export const generalCodeIcons: Record<string, TIconName> = {
  2: "thunder",
  3: "drizzle",
  5: "rain",
  6: "snow",
  7: "fog",
  8: "clear-sky",
};

export const iconsList = {
  rain: Rain,
  "heavy-rain": HeavyRain,
  "light-rain": LightRain,
  "night-cloudy": NightCloudy,
  thunder: Thunder,
  clouds: Clouds,
  drizzle: LightRain,
  snow: Snow,
  fog: Fog,
  "clear-sky": ClearSky,
};

export type TIconName = keyof typeof iconsList;
