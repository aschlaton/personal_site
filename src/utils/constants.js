// sprite animation
const TOTAL_FRAMES = 36;
const SCROLL_PER_FRAME = 100;
const FRAMES_PER_ROW = 6;
const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 32;


// color
// read from ColorVariables.astro
function hexToGrayscale(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) : 255;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 255 };
}

const whiteHex = getComputedStyle(document.documentElement).getPropertyValue('--color-white').trim();
const blackHex = getComputedStyle(document.documentElement).getPropertyValue('--color-black').trim();
const linkLightHex = getComputedStyle(document.documentElement).getPropertyValue('--color-link-light').trim();
const linkDarkHex = getComputedStyle(document.documentElement).getPropertyValue('--color-link-dark').trim();

const WHITE_RGB = hexToGrayscale(whiteHex);
const BLACK_RGB = hexToGrayscale(blackHex);
const LINK_LIGHT = hexToRgb(linkLightHex);
const LINK_DARK = hexToRgb(linkDarkHex);
