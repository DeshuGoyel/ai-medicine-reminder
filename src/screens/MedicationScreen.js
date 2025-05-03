import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';

const MedicationScreen = () => {
  const { theme } = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: '',
  });

  const addMedication = () => {
    if (newMedication.name && newMedication.dosage) {
      setMedications([...medications, { ...newMedication, id: Date.now() }]);
      setNewMedication({ name: '', dosage: '', frequency: '', time: '' });
      setIsModalVisible(false);
    }
  };

  const MedicationCard = ({ medication }) => (
    <View
      style={[
        styles.medicationCard,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <Text style={[styles.medicationName, { color: theme.colors.text }]}>
        {medication.name}
      </Text>
      <Text style={[styles.medicationDetails, { color: theme.colors.textSecondary }]}>
        Dosage: {medication.dosage}
      </Text>
      <Text style={[styles.medicationDetails, { color: theme.colors.textSecondary }]}>
        Frequency: {medication.frequency}
      </Text>
      <Text style={[styles.medicationDetails, { color: theme.colors.textSecondary }]}>
        Time: {medication.time}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {medications.map((medication) => (
          <MedicationCard key={medication.id} medication={medication} />
        ))}

        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={[styles.addButtonText, { color: theme.colors.buttonText }]}>
            Add New Medication
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: theme.colors.card },
            ]}
          >
            <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
              Add New Medication
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.input,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Medication Name"
              placeholderTextColor={theme.colors.textSecondary}
              value={newMedication.name}
              onChangeText={(text) =>
                setNewMedication({ ...newMedication, name: text })
              }
            />

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.input,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Dosage"
              placeholderTextColor={theme.colors.textSecondary}
              value={newMedication.dosage}
              onChangeText={(text) =>
                setNewMedication({ ...newMedication, dosage: text })
              }
            />

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.input,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Frequency (e.g., Once daily)"
              placeholderTextColor={theme.colors.textSecondary}
              value={newMedication.frequency}
              onChangeText={(text) =>
                setNewMedication({ ...newMedication, frequency: text })
              }
            />

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.input,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Time (e.g., 9:00 AM)"
              placeholderTextColor={theme.colors.textSecondary}
              value={newMedication.time}
              onChangeText={(text) =>
                setNewMedication({ ...newMedication, time: text })
              }
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.colors.primary }]}
                onPress={addMedication}
              >
                <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
                  Add
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.colors.border }]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={[styles.buttonText, { color: theme.colors.text }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  medicationCard: {
    padding: 16,
    borderRadius: 12,
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
  medicationName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  medicationDetails: {
    fontSize: 14,
    marginBottom: 4,
  },
  addButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MedicationScreen;
