import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme } from '../constants/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themePreference');
      if (savedTheme) {
        const { isDark, isSystem } = JSON.parse(savedTheme);
        setIsDarkMode(isDark);
        setIsSystemTheme(isSystem);
      } else {
        // Default to system theme and check time of day
        const hour = new Date().getHours();
        setIsDarkMode(hour >= 18 || hour < 6);
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
      // Default to light theme on error
      setIsDarkMode(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      setIsSystemTheme(false);
      await AsyncStorage.setItem(
        'themePreference',
        JSON.stringify({ isDark: newIsDarkMode, isSystem: false })
      );
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      isDarkMode, 
      toggleTheme, 
      isSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
