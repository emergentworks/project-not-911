import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { AddToHomeScreen } from './components';
import { ThemeManager } from './context';
import useCachedResources from './hooks/useCachedResources';
import { useTheme } from './context';
import Navigation from './navigation';

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
const AppComponent = () => {
  const isLoadingComplete = useCachedResources();
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AddToHomeScreen />
        <Navigation colorScheme={mode} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
export default function App() {
  return (
    <ThemeManager>
      <AppComponent />
    </ThemeManager>
  );
}
