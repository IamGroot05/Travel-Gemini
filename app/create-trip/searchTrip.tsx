import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TripDetailsContext } from '@/context/TripDetailsContext';

export default function searchTrip() {
    const {tripData, setTripData} = React.useContext<any>(TripDetailsContext);
    const navigation = useNavigation();
    const router = useRouter();

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
        setTripData({
          tripTo: data.description,
          coordinates: details?.geometry.location,
          photoRef: (details as any)?.photos[0]?.photo_reference,
          url: details?.url,
        });
        router.push('create-trip/selectTravelers');
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