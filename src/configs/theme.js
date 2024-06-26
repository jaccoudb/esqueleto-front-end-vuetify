export default {
  // global theme for the app
  globalTheme: 'light', // light | dark

  // side menu theme, use global theme or custom
  menuTheme: 'dark', // global | light | dark

  // toolbar theme, use global theme or custom
  toolbarTheme: 'global', // global | light | dark

  // show toolbar detached from top
  isToolbarDetached: false,

  // wrap pages content with a max-width
  isContentBoxed: false,

  // application is right to left
  isRTL: false,

  // dark theme colors
  dark: {
    background: '#05090c',
    surface: '#111b27',
    primary: '#1867C0',
    secondary: '#829099',
    accent: '#82B1FF',
    error: '#B74560',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },

  // light theme colors
  light: {
    background: '#ffffff',
    surface: '#f2f5f8',
    primary: '#1867C0',
    secondary: '#a0b9c8',
    accent: '#048ba8',
    error: '#B74560',
    info: '#2196F3',
    success: '#06d6a0',
    warning: '#ffd166',
  },
};
