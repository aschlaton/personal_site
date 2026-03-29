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
  const subtitleR = lerp(SUBTITLE_LIGHT.r, SUBTITLE_DARK.r, progress);
  const subtitleG = lerp(SUBTITLE_LIGHT.g, SUBTITLE_DARK.g, progress);
  const subtitleB = lerp(SUBTITLE_LIGHT.b, SUBTITLE_DARK.b, progress);
  const mutedR = lerp(MUTED_LIGHT.r, MUTED_DARK.r, progress);
  const mutedG = lerp(MUTED_LIGHT.g, MUTED_DARK.g, progress);
  const mutedB = lerp(MUTED_LIGHT.b, MUTED_DARK.b, progress);
  const dividerR = lerp(DIVIDER_LIGHT.r, DIVIDER_DARK.r, progress);
  const dividerG = lerp(DIVIDER_LIGHT.g, DIVIDER_DARK.g, progress);
  const dividerB = lerp(DIVIDER_LIGHT.b, DIVIDER_DARK.b, progress);
  const borderR = lerp(BORDER_LIGHT.r, BORDER_DARK.r, progress);
  const borderG = lerp(BORDER_LIGHT.g, BORDER_DARK.g, progress);
  const borderB = lerp(BORDER_LIGHT.b, BORDER_DARK.b, progress);
  const linkR = lerp(LINK_LIGHT.r, LINK_DARK.r, progress);
  const linkG = lerp(LINK_LIGHT.g, LINK_DARK.g, progress);
  const linkB = lerp(LINK_LIGHT.b, LINK_DARK.b, progress);

  document.documentElement.style.setProperty('--color-bg', `rgb(${bgR}, ${bgG}, ${bgB})`);
  document.documentElement.style.setProperty('--color-fg', `rgb(${fgR}, ${fgG}, ${fgB})`);
  document.documentElement.style.setProperty('--color-subtitle', `rgb(${subtitleR}, ${subtitleG}, ${subtitleB})`);
  document.documentElement.style.setProperty('--color-muted', `rgb(${mutedR}, ${mutedG}, ${mutedB})`);
  document.documentElement.style.setProperty('--color-divider', `rgb(${dividerR}, ${dividerG}, ${dividerB})`);
  document.documentElement.style.setProperty('--color-border', `rgb(${borderR}, ${borderG}, ${borderB})`);
  document.documentElement.style.setProperty('--color-link', `rgb(${linkR}, ${linkG}, ${linkB})`);
})();
