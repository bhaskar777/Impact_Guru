import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as MystatusBar } from 'react-native';
import MyStack from './src/Navigation/StackNavigation';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MystatusBar  backgroundColor="#004e92"  /> */}
      {/* <Home/> */}
      <Text>Hello</Text>
      <Text>psk data 1234567890-</Text>
      <MyStack/>
      {/* http://api.tvmaze.com/shows/1/episodes */}
      <Text>Bhaskar</Text>
      <Text>Hello I am bhaskar This is my branch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
