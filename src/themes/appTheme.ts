import { MD3LightTheme } from 'react-native-paper';

export const appTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1890ff',
    secondary: '#66788A',
    success: '#00B56A',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',
    confidenceBlue: '#1A56DB',
    confidenceGreen: '#0CA678',
    confidencePurple: '#7E3AF2',
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F8F9FA',
    gray100: '#F1F3F5',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#ADB5BD',
    gray600: '#868E96',
    gray700: '#495057',
    gray800: '#343A40',
    gray900: '#212529',
  },
  background:{
    primary: '#1890ff',
    surface: '#F8F9FA',
    surfaceVariant: '#F1F3F5',
  },
  roundness: 12,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  
  fonts: {
    ...MD3LightTheme.fonts,
    // headlineSmall: { ... }
  },
} as const;

export type AppTheme = typeof appTheme;