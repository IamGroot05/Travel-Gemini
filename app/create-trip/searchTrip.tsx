import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function searchTrip() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Search Trip',
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
                fontFamily: 'Outfit-Bold',
            },
        });        
    }, []);
  return (
    <View style={styles.searchWrapper}>
      <GooglePlacesAutocomplete
      placeholder='&#128269; Search Place'
      fetchDetails={true}
      styles={{textInputContainer:{backgroundColor:'F9F9F9',borderWidth:2,borderBlockColor:Colors.button_primery,borderRadius:10},}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    searchWrapper:{
        backgroundColor:Colors.background_primary,
        padding: 20,
        paddingTop: 90,
        height:'100%'
    }
})