import { useAppTheme } from '@hooks';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  const theme = useAppTheme();
  return (
    <PaperProvider theme={themer}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
