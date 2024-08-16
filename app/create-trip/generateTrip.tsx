import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { getFontSize } from '@/utils/platformUtils'
import { AI_PROMPT } from '@/constants/TravelersOptions'
import { TripDetailsContext } from '@/context/TripDetailsContext'

export default function generateTrip() {
    const {tripData, setTripData} = React.useContext<any>(TripDetailsContext);
    
    useEffect(()=>{
        tripData&&GenerateAITripPrompt()
    },[tripData])


    const GenerateAITripPrompt = () =>{
        const FinalPrompt = AI_PROMPT
        .replace('{location}', tripData?.tripTo)
        .replace('{numberOfDays}',tripData?.totalNoDays)
        .replace('{numberOfNight}',tripData?.totalNoDays-1+'')
        .replace('{travelers}',tripData?.travelerCount?.title)
        .replace('{budget}',tripData?.budget)
        .replace('{noDays}',tripData?.totalNoDays)
        .replace('{noNight}',tripData?.totalNoDays-1+'')
        
        console.log(FinalPrompt);
    }
  return (
    <View style={{paddingTop:60,padding:10,backgroundColor:Colors.background_primary,height:'100%'}}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize:getFontSize(35), marginTop:20, textAlign:'center'}}>Please Wait...</Text>
      <View style={{flexDirection:'column',marginTop:15}}>
        <Text style={{ fontFamily: 'Outfit-md', fontSize:getFontSize(18), marginTop:15, textAlign:'center'}}>We are working to generate your dream trip</Text>
        <Image style={{width:'100%', height:300}} source={require('@/assets/images/plane.gif')}/>
        <Text style={{ fontFamily: 'Outfit', fontSize:getFontSize(16), color:Colors.Grey, marginTop:25, textAlign:'center'}}>Don't Go Back !!!</Text>
      </View>
    </View>
  )
}