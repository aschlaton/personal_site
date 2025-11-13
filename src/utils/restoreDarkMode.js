// Apply saved dark mode state immediately to prevent flash
(function() {
  const stored = sessionStorage.getItem('darkModeProgress');
  const maxScroll = (TOTAL_FRAMES - 1) * SCROLL_PER_FRAME;

  // Default to dark mode (max scroll) if no stored value
  const scrollValue = stored ? parseFloat(stored) : maxScroll;
  const progress = scrollValue / maxScroll;

  // Color values from colors.css - must be kept in sync
  const WHITE_RGB = 205; // #cdcdcd
  const BLACK_RGB = 42;  // #2a2a2a
  const LINK_LIGHT = { r: 61, g: 93, b: 195 };   // #3d5dc3
  const LINK_DARK = { r: 184, g: 168, b: 255 };  // #b8a8ff

  function interpolate(start, end, progress) {
    return Math.round(start + (end - start) * progress);
  }

  const bgColor = interpolate(WHITE_RGB, BLACK_RGB, progress);
  const fgColor = interpolate(BLACK_RGB, WHITE_RGB, progress);
  const linkR = interpolate(LINK_LIGHT.r, LINK_DARK.r, progress);
  const linkG = interpolate(LINK_LIGHT.g, LINK_DARK.g, progress);
  const linkB = interpolate(LINK_LIGHT.b, LINK_DARK.b, progress);

  document.documentElement.style.setProperty('--color-bg', `rgb(${bgColor}, ${bgColor}, ${bgColor})`);
  document.documentElement.style.setProperty('--color-fg', `rgb(${fgColor}, ${fgColor}, ${fgColor})`);
  document.documentElement.style.setProperty('--color-link', `rgb(${linkR}, ${linkG}, ${linkB})`);
})();
