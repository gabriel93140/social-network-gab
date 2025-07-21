import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateGroupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Group 👥</Text>
      <Text style={styles.subtitle}>This screen will have your group creation form.</Text>
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
});
