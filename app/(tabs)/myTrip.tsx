import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';
import { router } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/configs/FirebaseConfig';

export default function myTrip() {
    const [trips, setTrips] = React.useState<any>([]);
    const [loading, setLoading] = useState(false);
    const user = auth.currentUser;

    const GetMyTrip = async() => {
      setLoading(true);
      setTrips([]);
      const q = query(collection(db,'UserTrips'),where('UserEmail', '==', user?.email))
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(docs => {
        setTrips(prev => [...prev, docs.data()])
      });
      setLoading(false);
    }
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headText} >My Trips</Text>
        <TouchableOpacity onPress={() => router.push('create-trip/generateTrip')}>
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