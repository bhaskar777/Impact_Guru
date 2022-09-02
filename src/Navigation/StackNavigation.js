import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Main'}>
			{/* <Stack.Screen name="SplashScreen" component={Splashscreen} /> */}
				<Stack.Screen name="Main" component={Home} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MyStack;