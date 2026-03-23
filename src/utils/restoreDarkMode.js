// Apply saved dark mode state immediately to prevent flash
// Note: This relies on constants being loaded before this script runs
(function() {
  const stored = sessionStorage.getItem('darkModeProgress');
  const maxScroll = (TOTAL_FRAMES - 1) * SCROLL_PER_FRAME;

  const scrollValue = stored ? parseFloat(stored) : maxScroll;
  const progress = scrollValue / maxScroll;

  function lerp(start, end, t) {
    return Math.round(start + (end - start) * t);
  }

  const bgR = lerp(BG_LIGHT.r, BG_DARK.r, progress);
  const bgG = lerp(BG_LIGHT.g, BG_DARK.g, progress);
  const bgB = lerp(BG_LIGHT.b, BG_DARK.b, progress);
  const fgR = lerp(FG_LIGHT.r, FG_DARK.r, progress);
  const fgG = lerp(FG_LIGHT.g, FG_DARK.g, progress);
  const fgB = lerp(FG_LIGHT.b, FG_DARK.b, progress);
  const linkR = lerp(LINK_LIGHT.r, LINK_DARK.r, progress);
  const linkG = lerp(LINK_LIGHT.g, LINK_DARK.g, progress);
  const linkB = lerp(LINK_LIGHT.b, LINK_DARK.b, progress);

  document.documentElement.style.setProperty('--color-bg', `rgb(${bgR}, ${bgG}, ${bgB})`);
  document.documentElement.style.setProperty('--color-fg', `rgb(${fgR}, ${fgG}, ${fgB})`);
  document.documentElement.style.setProperty('--color-link', `rgb(${linkR}, ${linkG}, ${linkB})`);
})();
