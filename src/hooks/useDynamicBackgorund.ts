import { useEffect } from "react";

export function useDynamicBackgorund(): void {
  useEffect(() => {
    const root = document.querySelector<HTMLDivElement>("#root");
    if (!root) return;

    const currentTime = new Date().getHours();
    const gradient = getGradientByTime(currentTime);

    root.style.background = `linear-gradient(${gradient})`;
  }, []);
}

function getGradientByTime(time: number): string {
  if (time >= 5 && time < 11) { // morning
    return "180deg, #81C5E6 0%, #DC927F 100%";
  }
  if (time >= 11 && time < 17) { // afternoon
    return "180deg, #4982AD 0%, rgba(144, 187, 216, 0.5) 100%";
  }
  if (time >= 17 && time < 21) { // evening
    return "180deg, #6F6D8C 0%, rgba(188, 97, 90, 0.5) 100%";
  }

  return "180deg, #011E33 0%, rgba(61, 53, 81, 0.8) 100%"; // night
}
