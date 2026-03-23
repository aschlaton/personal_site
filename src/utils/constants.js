// sprite animation
const TOTAL_FRAMES = 36;
const SCROLL_PER_FRAME = 100;
const FRAMES_PER_ROW = 6;
const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 32;


// color
// read from ColorVariables.astro
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 255 };
}

const style = getComputedStyle(document.documentElement);
const BG_LIGHT = hexToRgb(style.getPropertyValue('--color-white').trim());
const BG_DARK = hexToRgb(style.getPropertyValue('--color-black').trim());
const FG_LIGHT = hexToRgb(style.getPropertyValue('--color-fg-light').trim());
const FG_DARK = hexToRgb(style.getPropertyValue('--color-fg-dark').trim());
const LINK_LIGHT = hexToRgb(style.getPropertyValue('--color-link-light').trim());
const LINK_DARK = hexToRgb(style.getPropertyValue('--color-link-dark').trim());
