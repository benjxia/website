const COLORS = {
  PRIMARY: '#b25887',
  SECONDARY: '#47c6c2',
}

const COLORS_VEC = {
  PRIMARY: HexToNormalizedRGBA(COLORS.PRIMARY),
  SECONDARY: HexToNormalizedRGBA(COLORS.SECONDARY),
}

document.documentElement.style.setProperty('--color-primary', COLORS.PRIMARY);
document.documentElement.style.setProperty('--color-secondary', COLORS.SECONDARY);

function NormalizeColor255(r: number, g: number, b: number, a: number = 255): [number, number, number, number] {
  return [r / 255, g / 255, b / 255, a / 255];
}

function HexToNormalizedRGBA(hex: string): [number, number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(ch => ch + ch).join('');
  if (c.length === 6) c += 'ff';

  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const a = parseInt(c.slice(6, 8), 16);

  return NormalizeColor255(r, g, b, a);
}

export { COLORS, COLORS_VEC };
