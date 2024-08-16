import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { getFontSize } from '@/utils/platformUtils';


interface Props {
  option: any;
  selectedTravelers: any;
}

export default function OptionCard({ option, selectedTravelers }: Props) {
  return (
    <View
      style={[{
        padding: '4%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.lightGrey,
        borderRadius: 15,
      },selectedTravelers?.id === option.id && {borderWidth: 2, borderColor: Colors.button_primery}]}
    >
      <View>
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: getFontSize(18) }}>{option.title}</Text>
        <Text style={{ fontFamily: 'Outfit', fontSize: getFontSize(14), color: Colors.Grey }}>
          {option.description}
        </Text>
      </View>
      <View>
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: getFontSize(40), color: Colors.Grey }}>
          {option.icon}
        </Text>
        {/* <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 16, color: Colors.Grey }}>
          {option.people}
        </Text> */}
      </View>
    </View>
  );
}