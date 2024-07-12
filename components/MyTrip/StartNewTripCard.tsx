import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
    const router = useRouter();
  return (
    <View>
      <View style={styles.card}>
        <MaterialIcons name="wrong-location" size={34} color="black" />  
        <Text style={{fontFamily:'Outfit-Bold',fontSize:18}}>No Trips Planned Yet</Text>
        <Text style={{fontFamily:'Outfit',fontSize:14, textAlign:'center', color:Colors.Grey, marginTop:30}}>Looks like its time to plan a new travel experinecel Get Started below</Text>
        <TouchableOpacity onPress={() => router.replace('create-trip/searchTrip')} style={{backgroundColor:Colors.button_primery, padding:10, borderRadius:10, marginTop:20}}>
          <Text style={{fontFamily:'Outfit-Bold',color:'white'}}>Start New Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})