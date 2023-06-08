import {
  TIconName,
  generalCodeIcons,
  strictCodeIcons,
} from "components/ui/icon/icons-list";
import { head } from "./head";

export function getIconName(code: number): TIconName | undefined {
  if (strictCodeIcons[code]) return strictCodeIcons[code];

  return generalCodeIcons[head(code.toString()) as string];
}
