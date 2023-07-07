import * as React from 'react';
import { NavigationContainer, userNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreens';
import SearchScreen from './screens/SearchScreens';
import ProfileScreen from './screens/ProfileScreens';
// import DetailScreen from './screens/DetailScreens';


const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarLabelStyle : { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { display: 'flex', padding: 10, height: 70, backgroundColor: '#C40B0B'},
        headerShown: false,

        })}
      >

       {/* <Tab.Screen name="Detail" component={DetailScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }} /> */}
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
