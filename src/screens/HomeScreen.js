import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const HomeScreen = ({ navigation }) => {
  const { theme, isDarkMode } = useTheme();

  const MenuButton = ({ title, onPress, icon }) => (
    <TouchableOpacity
      style={[
        styles.menuButton,
        { 
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border
        }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.menuButtonText, { color: theme.colors.text }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome to AI Medicine Reminder
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Your smart medication management assistant
        </Text>
      </View>

      <View style={styles.menuGrid}>
        <MenuButton
          title="My Medications"
          onPress={() => navigation.navigate('Medications')}
        />
        <MenuButton
          title="Reminders"
          onPress={() => navigation.navigate('Reminders')}
        />
        <MenuButton
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>

      <View style={[styles.infoCard, { 
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border
      }]}>
        <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
          Today's Schedule
        </Text>
        <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
          No medications scheduled for today.
          Tap "My Medications" to add your first medication.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  menuButton: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;
