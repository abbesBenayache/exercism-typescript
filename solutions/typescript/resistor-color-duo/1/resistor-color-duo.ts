export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

export type Color = typeof COLORS[number];

export const colorCode = (color: Color): number => {
  const code = COLORS.indexOf(color);
  if (code === -1) {
    throw new Error(`Couleur invalide : ${color}`);
  }
  return code;
};

export const decodedValue = (colors: Color[]): number => {
  if (!colors || colors.length < 2) {
    throw new Error("Au moins deux couleurs sont requises.");
  }

  return colorCode(colors[0]) * 10 + colorCode(colors[1]);
};