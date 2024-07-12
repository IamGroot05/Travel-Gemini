import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "./../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.button_primery,
        tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Outfit-SemiBold'},
      }}>
        <Tabs.Screen name="myTrip" options={{
            tabBarLabel: 'My Trip',
            tabBarIcon:({color})=><Fontisto name="holiday-village" size={24} color={color} />}} />
        <Tabs.Screen name="discovers"  options={{
            tabBarLabel: 'Discovers',
            tabBarIcon:({color})=><Ionicons name="earth" size={24} color={color} />}}/>
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({color})=><FontAwesome name="user-circle-o" size={24} color={color} />}} />
    </Tabs>
  )
}