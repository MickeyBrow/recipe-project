import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../cooking-app/screens/homeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer style={styles.bottomNavBar}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch(route.name) {
                  case "Home":
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                    break;
                  case "Random":
                    iconName = focused ? 'restaurant' : 'restaurant-outline';
                    break;

                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Random" component={() => {}} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});