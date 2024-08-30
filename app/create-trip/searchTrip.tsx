import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { TripDetailsContext } from '@/context/TripDetailsContext';
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
    const startPlaceRef = useRef<GooglePlacesAutocompleteRef | null>(null);
    const ToPlaceRef = useRef<GooglePlacesAutocompleteRef | null>(null);



    useEffect(() => {
        navigation.setOptions({
            title: 'Plan Your Trip',
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
                fontFamily: 'Outfit-Bold',
            },
        });        
    }, [navigation]);

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

    // Step 2: Log and check if it is the first render
    useEffect(() => {
        startPlaceRef.current?.setAddressText(address)
    });

    const fetchAddress = async (location: any) => {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    latlng: `${location.coords.latitude},${location.coords.longitude}`,
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
                }
            });

            if (response.data.results.length > 0) {
                const fetchedAddress = response.data.results[0].formatted_address;
                setAddress(fetchedAddress);

                setTripData({
                    ...tripData,
                    startingLocation: fetchedAddress
                });
            } else {
                setAddress('No address found for these coordinates');
            }
        } catch (err) {
            console.error('Failed to fetch address', err);
        }
    };

    const handleLocationIconPress = async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        fetchAddress(location);
    };

    const handelNextPageNavigation = () =>{
        if(ToPlaceRef.current?.getAddressText() !== '' && startPlaceRef.current?.getAddressText() !== ''){
            router.push('create-trip/selectTravelers');
        }
    }

    return (
        <View style={styles.searchWrapper}>
            <View style={{height:74}}>
                <Text style={styles.label}>From</Text>
                <GooglePlacesAutocomplete
                    placeholder='🛫 Your city ?'
                    fetchDetails={true}
                    styles={googlePlacesStyles}
                    ref={startPlaceRef}
                    onPress={(data, details = null) => {
                        setAddress(data.description)
                        setTripData({
                            ...tripData,
                            startingLocation: data.description,
                        });
                        handelNextPageNavigation()
                    }}
                    query={{
                        key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                />
            </View>
           <View style={{height:74}}>
                <Text style={styles.label}>Destination</Text>
                <GooglePlacesAutocomplete
                    placeholder='🛬 Where to ?'
                    fetchDetails={true}
                    styles={googlePlacesStyles}
                    ref={ToPlaceRef}
                    onPress={(data, details = null) => {
                        setTripData({
                            ...tripData,
                            tripTo: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: (details as any)?.photos[0]?.photo_reference,
                            url: details?.url,
                        });
                        handelNextPageNavigation()
                    }}
                    query={{
                        key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                />
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchWrapper: {
        display:'flex',
        gap:50,
        zIndex: -1,
        backgroundColor: Colors.background_primary,
        padding: 20,
        paddingTop: 90,
        height: '100%',
    },
    label: {
        zIndex: -1,
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
        zIndex: -1,
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        borderColor: Colors.button_primery,
        borderRadius: 10,
    },
    listView: { 
        position: 'absolute', 
        top: 55, 
        borderColor: Colors.Grey,
        borderTopWidth: 1, 
        borderLeftWidth: 1, 
        borderRightWidth: 1, 
        borderBottomWidth: 1, 
        borderRadius: 4, 
    },
};
