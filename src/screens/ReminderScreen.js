import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';

const ReminderScreen = () => {
  const { theme } = useTheme();
  const [reminders, setReminders] = useState([
    {
      id: 1,
      medicationName: 'Sample Medication',
      time: '9:00 AM',
      isEnabled: true,
      nextDose: new Date().toLocaleDateString(),
    },
  ]);

  const toggleReminder = (id) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, isEnabled: !reminder.isEnabled }
          : reminder
      )
    );
  };

  const ReminderCard = ({ reminder }) => (
    <View
      style={[
        styles.reminderCard,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={styles.reminderHeader}>
        <Text style={[styles.medicationName, { color: theme.colors.text }]}>
          {reminder.medicationName}
        </Text>
        <Switch
          value={reminder.isEnabled}
          onValueChange={() => toggleReminder(reminder.id)}
          trackColor={{ false: '#767577', true: theme.colors.primary }}
          thumbColor={reminder.isEnabled ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.reminderDetails}>
        <Text style={[styles.reminderText, { color: theme.colors.textSecondary }]}>
          Next dose: {reminder.nextDose}
        </Text>
        <Text style={[styles.reminderText, { color: theme.colors.textSecondary }]}>
          Time: {reminder.time}
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => {/* Handle take now */}}
        >
          <Text style={[styles.actionButtonText, { color: theme.colors.buttonText }]}>
            Take Now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.colors.border }]}
          onPress={() => {/* Handle skip */}}
        >
          <Text style={[styles.actionButtonText, { color: theme.colors.text }]}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyStateText, { color: theme.colors.textSecondary }]}>
              No reminders set.
              Add medications to see reminders here.
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => {/* Navigate to add medication */}}
        >
          <Text style={[styles.addButtonText, { color: theme.colors.buttonText }]}>
            Add New Reminder
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  reminderCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: '600',
  },
  reminderDetails: {
    marginBottom: 16,
  },
  reminderText: {
    fontSize: 14,
    marginBottom: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyStateText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
  },
  addButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReminderScreen;
