import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';

const SettingsScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoSchedule, setAutoSchedule] = useState(false);

  const SettingItem = ({ title, description, value, onValueChange }) => (
    <View
      style={[
        styles.settingItem,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={styles.settingHeader}>
        <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
          {title}
        </Text>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#767577', true: theme.colors.primary }}
          thumbColor={value ? '#ffffff' : '#f4f3f4'}
        />
      </View>
      {description && (
        <Text
          style={[styles.settingDescription, { color: theme.colors.textSecondary }]}
        >
          {description}
        </Text>
      )}
    </View>
  );

  const SettingSection = ({ title, children }) => (
    <View style={styles.section}>
      <Text
        style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}
      >
        {title}
      </Text>
      {children}
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <SettingSection title="Appearance">
        <SettingItem
          title="Dark Mode"
          description="Use dark theme for better visibility in low light"
          value={isDarkMode}
          onValueChange={toggleTheme}
        />
      </SettingSection>

      <SettingSection title="Notifications">
        <SettingItem
          title="Enable Notifications"
          description="Receive reminders for your medications"
          value={notifications}
          onValueChange={setNotifications}
        />
        <SettingItem
          title="Sound Enabled"
          description="Play sound with medication reminders"
          value={soundEnabled}
          onValueChange={setSoundEnabled}
        />
      </SettingSection>

      <SettingSection title="AI Features">
        <SettingItem
          title="Smart Scheduling"
          description="Let AI optimize your medication schedule"
          value={autoSchedule}
          onValueChange={setAutoSchedule}
        />
      </SettingSection>

      <SettingSection title="Data Management">
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => {/* Handle export */}}
        >
          <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
            Export Medication History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => {/* Handle backup */}}
        >
          <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
            Backup Data
          </Text>
        </TouchableOpacity>
      </SettingSection>

      <View style={styles.footer}>
        <Text style={[styles.version, { color: theme.colors.textSecondary }]}>
          Version 1.0.0
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  settingItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  settingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
  },
});

export default SettingsScreen;
