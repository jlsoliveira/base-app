import { useTheme } from 'react-native-paper';
import { appTheme } from '../themes/appTheme';

export const useAppTheme = () => {
  const paperTheme = useTheme();
  
  return {
    ...paperTheme,
    ...appTheme,
    customColors: appTheme.colors,
    spacing: appTheme.spacing,
  };
};