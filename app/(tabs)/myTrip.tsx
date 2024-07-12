import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';
import { router } from 'expo-router';

export default function myTrip() {
    const [trips, setTrips] = React.useState([]);
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headText} >My Trips</Text>
        <TouchableOpacity onPress={() => router.push('create-trip/searchTrip')}>
         <AntDesign name="pluscircle" size={30} color="black"/>   
        </TouchableOpacity>
       </View> 
       {trips.length === 0 ? <StartNewTripCard /> : <Text>Trips</Text>}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  headText: {
    fontSize: 30,
    fontFamily: 'Outfit-SemiBold',
  }
})