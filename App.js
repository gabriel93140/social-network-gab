import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CreateGroupScreen from './screens/CreateGroupScreen';

import StrongestFootballPlayers from './screens/StrongestFootballPlayers';
import CutestDogs from './screens/CutestDogs';
import BestDJs from './screens/BestDJs';
import IncredibleTravelers from './screens/IncredibleTravelers';
import MostStylishPeople from './screens/MostStylishPeople';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
        <Stack.Screen name="StrongestFootballPlayers" component={StrongestFootballPlayers} />
        <Stack.Screen name="CutestDogs" component={CutestDogs} />
        <Stack.Screen name="BestDJs" component={BestDJs} />
        <Stack.Screen name="IncredibleTravelers" component={IncredibleTravelers} />
        <Stack.Screen name="MostStylishPeople" component={MostStylishPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
