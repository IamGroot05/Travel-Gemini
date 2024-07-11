import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './sign-in'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function signUp(): JSX.Element {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:'8%'}} onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    <View style={styles.text_container}>
      <Text style={{ fontFamily: "Outfit-Bold", fontSize: 30 }}>
        Create New Account
      </Text>
      <Text
        style={{ fontFamily: "Outfit", fontSize: 20, color: Colors.Grey }}
      >
        Welcome To Travel Gemini
      </Text>
    </View>
    <View style={styles.input_wrapper}>
      <View>
        <Text style={{ fontFamily: "Outfit", fontSize: 15 }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter you'r full name"
        />
      </View>
      <View>
        <Text style={{ fontFamily: "Outfit", fontSize: 15 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter you'r email address"
        />
      </View>
      <View>
        <Text style={{ fontFamily: "Outfit", fontSize: 15 }}>Password</Text>
        <TextInput placeholder="Enter you'r password"
secureTextEntry={true} style={styles.input} />
      </View>
      {/* Button Section */}
      <View style={{marginTop:30}}>
        {/* Creat Account In Button */}
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontFamily: "product-sans",
              fontSize: 15,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        {/* Sign In Button */}
        <TouchableOpacity style={styles.button_secondary}
        onPress={()=>router.replace('/sign-in')}>
          <Text
            style={{
              fontFamily: "product-sans",
              fontSize: 15,
              textAlign: "center",
              color: "#000",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}
