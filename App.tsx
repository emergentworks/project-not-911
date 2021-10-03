import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AddToHomeScreen } from './components';
import { CacheManager, LocationManager, ThemeManager, useTheme } from './context';
import useCachedResources from './hooks/useCachedResources';
import { Navigation } from './navigation';

const queryClient = new QueryClient();

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <AddToHomeScreen />
        <Navigation colorScheme={mode} />
        <StatusBar />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default function App() {
  return (
    <CacheManager>
      <LocationManager>
        <ThemeManager>
          <AppComponent />
        </ThemeManager>
      </LocationManager>
    </CacheManager>
  );
}
