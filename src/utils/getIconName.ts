import {
  TIconName,
  generalCodeIcons,
  strictCodeIcons,
} from "components/ui/icon/icons-list";

export function getIconName(code: number): TIconName | undefined {
  if (strictCodeIcons[code]) return strictCodeIcons[code];

  return generalCodeIcons[code.toString()[0]];
}
