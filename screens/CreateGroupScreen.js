import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function CreateGroupScreen() {
  const invitationMessage =
    "Salut ! Rejoins-moi sur l'application GAB et participe au groupe que je viens de créer.";

  const handleCopyMessage = async () => {
    await Clipboard.setStringAsync(invitationMessage);
    Alert.alert('Message copié', "Le message d'invitation est prêt à être collé dans vos conversations.");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Group 👥</Text>
      <Text style={styles.subtitle}>This screen will have your group creation form.</Text>
      <TouchableOpacity style={styles.button} onPress={handleCopyMessage}>
        <Text style={styles.buttonText}>Copier le message d'invitation</Text>
      </TouchableOpacity>
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
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

