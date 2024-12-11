import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {

  const colorScheme = 'light'; 
  const Colors = {
    light: { tint: '#000' },
    dark: { tint: '#fff' },
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, 
      }}
    >
       
       <Tabs.Screen
  name="homepage"
  options={{
    tabBarIcon: ({ color }) => (
      <AntDesign name="home" size={24} color="black" />
    ),
  }}
/>

        <Tabs.Screen name="products"
        
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shoe-sneaker" size={24} color={color} />
          ),
        }}
        
        />

        <Tabs.Screen name="inventory"
         options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="inventory" size={24} color="black" />
          ),
        }}
        
         />
       
    </Tabs>
  );
} 