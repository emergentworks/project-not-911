import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AddToHomeScreen } from './components';
import { ThemeManager, LocationManager } from './context';
import { useTheme } from './context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

// @ts-ignore TODO fix it so typescript knows what @env means
import { AIRTABLE_KEY } from '@env';

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
const AppComponent = () => {
  const isLoadingComplete = useCachedResources();
  const { mode }: { mode: 'light' | 'dark' } = useTheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appNBdtRINjSfT9Yw/organizations?view=Grid%20view', {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      }
    })
      .then((response) => response.json())
      .then((json) => console.log('Fetch json Results:', json.results))
      .catch((error) => console.error(error))
  }, []);

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AddToHomeScreen />
      <Navigation colorScheme={mode} />
      <StatusBar />
    </SafeAreaProvider>
  );

};

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
export default function App() {
  return (
    <LocationManager>
      <ThemeManager>
        <AppComponent />
      </ThemeManager>
    </LocationManager>
  );
}
