import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import { useTheme } from './src/hooks/useTheme';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorBoundary from './src/utils/ErrorBoundary';

// Wrapper component to access theme context
const AppContent = () => {
  const { theme, isDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
