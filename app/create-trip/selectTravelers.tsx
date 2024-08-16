import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { TravelersOptions } from '@/constants/TravelersOptions';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { TripDetailsContext } from '@/context/TripDetailsContext';
import { getFontSize } from '@/utils/platformUtils';

export default function selectTravelers() {
    
    const {tripData, setTripData} = React.useContext<any>(TripDetailsContext);
    const [selectedTravelers, setSelectedTravelers] = React.useState<any>();
    const navigation = useNavigation();
    const router = useRouter();
    
    useEffect(() => {
        setTripData({...tripData, travelerCount: selectedTravelers});

    }, [selectedTravelers]);

    useEffect(() => {
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
         <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(35), marginTop:30}}>Who's Traveling</Text>
         <View style={{flexDirection:'column',marginTop:15}}>
            <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(20), marginTop:10}}>Choose Your Travelers</Text>
            <FlatList data={TravelersOptions} renderItem={({ item, index} )=>(
                <TouchableOpacity onPress={()=> setSelectedTravelers(item)} style={{marginVertical:10}}>
                   <OptionCard option={item} selectedTravelers={selectedTravelers} />
                </TouchableOpacity>
            )} />
         </View>
         <View style={{width:'100%',alignItems:'center', justifyContent:'center',display:'flex', flexDirection:'row'}}>
            <TouchableOpacity disabled={selectedTravelers === undefined} onPress={()=>router.push('create-trip/selectDate') } style={[{backgroundColor: Colors.button_primery,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                padding: '3%',
                borderRadius: 10,
                marginTop: "5%",},selectedTravelers === undefined &&{opacity:0.5}]}>
                <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(20), color:Colors.background_primary}}>Continue</Text>
            </TouchableOpacity>
         </View>
        </View>
    )
}