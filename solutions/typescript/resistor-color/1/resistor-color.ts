export const colorCode = (color: Color) : number => {
  const code = COLORS.indexOf(color); 
  if (code === -1) {
      throw new Error(`Invalid color : ${color}`);  
  }
  return code;
}

export const getAllColors = () : readonly Color[] => COLORS;

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const; 

export type Color = typeof COLORS[number];
