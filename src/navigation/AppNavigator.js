import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../hooks/useTheme';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import MedicationScreen from '../screens/MedicationScreen';
import ReminderScreen from '../screens/ReminderScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.buttonText,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'AI Medicine Reminder' }}
      />
      <Stack.Screen 
        name="Medications" 
        component={MedicationScreen} 
        options={{ title: 'My Medications' }}
      />
      <Stack.Screen 
        name="Reminders" 
        component={ReminderScreen} 
        options={{ title: 'Reminders' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
