import type { ThemeConfig } from 'bentopdf-viewer';

export const viewerTheme: ThemeConfig = {
  light: {
    accent: {
      primary: '#ef4444',
      primaryHover: '#dc2626',
      primaryActive: '#b91c1c',
      primaryLight: '#eef2ff',
      primaryForeground: '#ffffff',
    },
    interactive: {
      selected: '#eef2ff',
      focus: '#ef4444',
      focusRing: '#fecaca',
    },
    state: {
      info: '#ef4444',
      infoLight: '#eef2ff',
    },
  },
  dark: {
    background: {
      app: '#222222',
      surface: '#2a2a2a',
      surfaceAlt: '#383838',
      elevated: '#2a2a2a',
      input: '#383838',
    },
    foreground: {
      onAccent: '#ffffff',
    },
    border: {
      default: '#444444',
      subtle: '#383838',
      strong: '#737373',
    },
    accent: {
      primary: '#ef4444',
      primaryHover: '#dc2626',
      primaryActive: '#b91c1c',
      primaryLight: '#38395c',
      primaryForeground: '#ffffff',
    },
    interactive: {
      hover: '#383838',
      active: '#444444',
      selected: '#38395c',
      focus: '#f87171',
      focusRing: '#3730a3',
    },
    state: {
      info: '#f87171',
      infoLight: '#38395c',
    },
    scrollbar: {
      track: '#2a2a2a',
      thumb: '#444444',
      thumbHover: '#737373',
    },
  },
};

export function getViewerTheme(): ThemeConfig {
  const preference =
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark';
  return { ...viewerTheme, preference };
}
