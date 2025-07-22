import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Clipboard from 'expo-clipboard';

export default function CreateGroupScreen() {
  const [groupTitle, setGroupTitle] = useState('');
  const [maxParticipants, setMaxParticipants] = useState(5);
  const [inactivityDelay, setInactivityDelay] = useState('');
  const invitationMessage = `Bienvenue dans le groupe "${groupTitle}" 🎉\nPrépare-toi à vivre une belle aventure !`;

  const handleCopyMessage = async () => {
    await Clipboard.setStringAsync(invitationMessage);
    Alert.alert('Message copié', "Le message d'invitation est prêt à être collé dans vos conversations.");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Titre du groupe</Text>
        <TextInput
          value={groupTitle}
          onChangeText={setGroupTitle}
          style={styles.input}
          placeholder="Ex: Les meilleurs DJs"
        />

        <Text style={styles.label}>Nombre maximum de participants</Text>
        <Picker
          selectedValue={maxParticipants}
          onValueChange={(itemValue) => setMaxParticipants(itemValue)}
          style={styles.picker}
        >
          {Array.from({ length: 19 }, (_, i) => i + 2).map(num => (
            <Picker.Item key={num} label={`${num}`} value={num} />
          ))}
        </Picker>

        <Text style={styles.label}>Délai d'inactivité (en jours)</Text>
        <TextInput
          value={inactivityDelay}
          onChangeText={setInactivityDelay}
          style={styles.input}
          placeholder="Ex: 7"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Message de bienvenue</Text>
        <Text style={styles.generatedMessage}>{invitationMessage}</Text>

        <TouchableOpacity style={styles.button} onPress={handleCopyMessage}>
          <Text style={styles.buttonText}>Copier le message d'invitation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#34B7F1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputGroup: {
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginTop: 5,
  },
  generatedMessage: {
    marginTop: 10,
    fontStyle: 'italic',
    backgroundColor: '#eef',
    padding: 10,
    borderRadius: 8,
  },
});