import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
