import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleCreateGroup = () => {
    navigation.navigate('CreateGroup');
  };

  const groupChats = [
    { name: 'Strongest Football Players ⚽', screen: 'StrongestFootballPlayers' },
    { name: 'Cutest Dogs 🐶', screen: 'CutestDogs' },
    { name: 'Best DJs Ever 🎧', screen: 'BestDJs' },
    { name: 'Incredible Travelers 🌍', screen: 'IncredibleTravelers' },
    { name: 'Most Stylish People 👗', screen: 'MostStylishPeople' },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to the Network!</Text>
        <Text style={styles.subtitle}>Start and Invite your Friends!</Text>
        <TouchableOpacity style={styles.button} onPress={handleCreateGroup}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chatList}>
        {groupChats.map((group, i) => (
          <TouchableOpacity key={i} style={styles.chatRow} onPress={() => navigation.navigate(group.screen)}>
            <View style={styles.chatAvatar}>
              <Text style={{ fontSize: 24 }}>{group.name.split(' ').pop()}</Text>
            </View>
            <View style={styles.chatContent}>
              <Text style={styles.chatName}>{group.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#002ffeff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatList: {
    flex: 1,
    width: '100%',
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMessage: {
    color: '#666',
    fontSize: 14,
  },
  chatTime: {
    fontSize: 12,
    color: '#888',
  },
});
