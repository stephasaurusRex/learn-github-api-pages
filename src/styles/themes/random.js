import chroma from "chroma-js";

const palette = {
  primary: chroma.random(),
  secondary: "tomato",
  greys: ["#F5F5F5", "#E8E8E8", "#BFBFBF", "#8C8C8C", "#424242", "#303030"],
  info: "skyblue",
  danger: "tomato",
  warning: "orangered",
  success: "olivedrab",
};

const shadows = [
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
];

const fonts = {
  headline: "Nunito, sans-serif",
  text: "Lato, sans-serif",
  code: "Consolas, Liberation Mono, Menlo, Courier, monospace",
};

const isTooDark = (color) => color.luminance() < 0.1;
const isTooBright = (color) => color.luminance() > 0.9;
const isBright = (color) => color.luminance() > 0.5;
const isSaturated = (color) => color.get("hsl.s") > 0.8;
const highEnoughContrast = (color1, color2) => chroma.contrast(color1, color2) > 4.5;

const makeColors = () => {
  let base = chroma.random();
  let accent = chroma.random();
  let text = chroma.random();

  if (isTooBright(base)) base = base.darken(2);
  if (isTooDark(base)) base = base.brighten(2);
  if (!isSaturated(base)) base = base.saturate(2);

  if (isBright(base)) accent = accent.darken(4);
  else accent = accent.brighten(4);

  if (isBright(base)) {
    while (!highEnoughContrast(base, text)) {
      if (text.luminance() <= 0) break;
      text = text.darken(1);
    }
  } else {
    while (!highEnoughContrast(base, text)) {
      if (text.luminance() >= 1) break;
      text = text.brighten(1);
    }
  }

  return { base, accent, text };
};

const gridColors = makeColors();
const todosColors = makeColors();
const landingColors = makeColors();

export default ({
  name: "random",
  palette,
  shadows,
  fonts,
  blends: {
    menu: {
      text: "white",
    },
    grid: {
      primary: gridColors.base.hex(),
      accent: gridColors.accent.hex(),
      text: gridColors.text.hex(),
    },
    todos: {
      primary: todosColors.base.hex(),
      accent: todosColors.accent.hex(),
      text: todosColors.text.hex(),
    },
    landing: {
      primary: landingColors.base.hex(),
      accent: landingColors.accent.hex(),
      text: landingColors.text.hex(),
    },
  },
});
