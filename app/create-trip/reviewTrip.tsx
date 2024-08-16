import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { getFontSize } from '@/utils/platformUtils';
import { TripDetailsContext } from '@/context/TripDetailsContext';
import moment from 'moment';

export default function reviewTrip() {
    
    const {tripData, setTripData} = React.useContext<any>(TripDetailsContext);
    const navigation = useNavigation();
    useEffect(() => {
        console.log(tripData);
        navigation.setOptions({
            title: '',
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
                fontFamily: 'Outfit-Bold',
            },
        });        
    }, []);
  return (
    <View style={{paddingTop:75,padding:25,backgroundColor:Colors.background_primary,height:'100%'}}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(35), marginTop:20}}>Review your trip</Text>
      <View style={{flexDirection:'column',marginTop:15}}>
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(18), marginTop:10}}>Before generating your trip, please review your selection</Text>
        {/* Destination Details */}
        <View style={{marginTop:10 , display:'flex',flexDirection:"row", alignItems:'center',gap: 20}}>
         <Text style={{fontSize:30}}>📍</Text>
         <View>
            <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(18), color:Colors.Grey}}>Destination</Text>
            <Text style={{ fontFamily: 'Outfit-md', fontSize:getFontSize(20)}}>{tripData?.tripTo}</Text>
         </View>
        </View>
        {/* Travelers Details */}
        <View style={{marginTop:10 , display:'flex',flexDirection:"row", alignItems:'center',gap: 20}}>
         <Text style={{fontSize:30}}>📍</Text>
         <View>
            <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(18), color:Colors.Grey}}>Travelers</Text>
            <Text style={{ fontFamily: 'Outfit-md', fontSize:getFontSize(20)}}>{tripData?.travelerCount?.title + ' ('+tripData?.travelerCount?.people+')'}</Text>
         </View>
        </View>
        {/* Date range Details */}
        <View style={{marginTop:10 , display:'flex',flexDirection:"row", alignItems:'center',gap: 20}}>
         <Text style={{fontSize:30}}>🗓️</Text>
         <View>
            <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(18), color:Colors.Grey}}>Selected Dates</Text>
            <Text style={{ fontFamily: 'Outfit-md', fontSize:getFontSize(20)}}>{moment(tripData?.startDate).format('DD MMM')+' To '+moment(tripData?.endDate).format('DD MMM')+' ('+tripData?.totalNoDays+' Days)'}</Text>
         </View>
        </View>
        {/* Budget Details */}
        <View style={{marginTop:10 , display:'flex',flexDirection:"row", alignItems:'center',gap: 20}}>
         <Text style={{fontSize:30}}>💲</Text>
         <View>
            <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(18), color:Colors.Grey}}>Budget</Text>
            <Text style={{ fontFamily: 'Outfit-md', fontSize:getFontSize(20)}}>{tripData?.budget}</Text>
         </View>
        </View>
      </View>
    </View>
  )
}