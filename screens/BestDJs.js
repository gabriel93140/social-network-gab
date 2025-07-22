// screens/StrongestFootballPlayers.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function BestDJs() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input }]);
      setInput('');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Best DJs Ever 🎧</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput value={input} onChangeText={setInput} placeholder="Type your message" style={styles.input} />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF4FF', paddingTop: 60 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  messageList: { paddingHorizontal: 20, paddingBottom: 20 },
  message: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10, alignSelf: 'flex-start', maxWidth: '80%' },
  inputContainer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#ccc', backgroundColor: '#fff' },
  input: { flex: 1, backgroundColor: '#F0F0F0', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10 },
  sendButton: { marginLeft: 10, backgroundColor: '#34B7F1', borderRadius: 20, paddingHorizontal: 20, justifyContent: 'center' },
  sendText: { color: '#fff', fontWeight: 'bold' },
});