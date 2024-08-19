import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TripDetailsContext } from '@/context/TripDetailsContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import axios from 'axios';

export default function SearchTrip() {
    const { tripData, setTripData } = React.useContext<any>(TripDetailsContext);
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [address, setAddress] = useState<string>('');  
    const [location, setLocation] = useState<any>();
    const [errorMsg, setErrorMsg] = useState<string>('');
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            title: 'Plan Your Trip',
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
                fontFamily: 'Outfit-Bold',
            },
        });        
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            setHasLocationPermission(true);

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location); 
            fetchAddress(location);
        })();
    }, []);

    const handleLocationIconPress = async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        fetchAddress(location);
    };

    const fetchAddress = async (location: any) => {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    latlng: `${location.coords.latitude},${location.coords.longitude}`,
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
                }
            });

            if (response.data.results.length > 0) {
                setAddress(response.data.results[0].formatted_address);
                setTripData({
                    ...tripData,
                    startingLocation: response.data.results[0].formatted_address
                });
            } else {
                setAddress('No address found for these coordinates');
            }
        } catch (err) {
            console.error('Failed to fetch address', err);
        }
    };

    return (
        <View style={styles.searchWrapper}>
            <Text style={styles.label}>From</Text>
            <GooglePlacesAutocomplete
                placeholder='🛬 Where to?'
                fetchDetails={true}
                styles={googlePlacesStyles}
                onPress={(data, details = null) => {
                    setTripData({
                        ...tripData,
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
          
            <Text style={styles.label}>Destination</Text>
            <GooglePlacesAutocomplete
                placeholder='🛬 Where to?'
                fetchDetails={true}
                styles={googlePlacesStyles}
                onPress={(data, details = null) => {
                    setTripData({
                        ...tripData,
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
    );
}

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: Colors.background_primary,
        padding: 20,
        paddingTop: 90,
        height: '100%',
    },
    label: {
        marginLeft: 8,
        marginBottom: 3,
        fontFamily: 'Outfit-md',
        fontSize: 14,
    },
    inputWrapper: {
        position: 'relative',
        height: 53,
        marginBottom: 40,
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        borderColor: Colors.button_primery,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        padding: 10,
        fontSize: 15,
    },
    locationIcon: {
        padding: 12,
        zIndex: 1,
    },
});

const googlePlacesStyles = {
    textInputContainer: {
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        borderColor: Colors.button_primery,
        borderRadius: 10,
    },
};
