import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { getFontSize } from '@/utils/platformUtils';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { Colors } from '@/constants/Colors';
import { TripDetailsContext } from '@/context/TripDetailsContext';


export default function selectDate() {
    const {tripData, setTripData} = React.useContext<any>(TripDetailsContext);
    const [startDate, setStartDate] = React.useState<any>();
    const [endDate, setEndDate] = React.useState<any>();
    const navigation = useNavigation();
    const router = useRouter();
    

    const handelDateChange = (date: any, type:string) => {
      if(type === 'START_DATE'){
        setStartDate(moment(date));
      }else{
        setEndDate(moment(date));
      }
    }

    const onContinueclick = async() => {
        if(startDate && endDate){
          const totalDays = endDate.diff(startDate, 'days');
          await setTripData({...tripData, startDate: startDate, endDate: endDate, totalNoDays: totalDays+1});
          router.push('create-trip/selectBudget');
         }
    }
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
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(35), marginTop:30}}>Travel Dates</Text>
      <View style={{flexDirection:'column',marginTop:15}}>
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(20), marginTop:10}}>Select Your Travel Dates</Text>
        <View style={{marginTop:20}}> 
            <CalendarPicker allowRangeSelection={true} restrictMonthNavigation={true} minDate={new Date()} selectedRangeStyle={{
                backgroundColor: '#191919',
            }} selectedDayTextStyle={{color:'#FFFFFF'}} textStyle={{fontFamily:'Outfit'}} onDateChange={handelDateChange} />
        </View>
        <View style={{width:'100%',alignItems:'center', justifyContent:'center',display:'flex', flexDirection:'row'}}>
            <TouchableOpacity disabled={!startDate&&!endDate} onPress={onContinueclick} style={[{backgroundColor: Colors.button_primery,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                padding: '3%',
                borderRadius: 10,
                marginTop: "10%",},!startDate&&!endDate &&{opacity:0.5}]}>
                <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(20), color:Colors.background_primary}}>Continue</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}