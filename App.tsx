import { useAppTheme } from '@hooks';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  const theme = useAppTheme();
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
    </PaperProvider>
  );
}