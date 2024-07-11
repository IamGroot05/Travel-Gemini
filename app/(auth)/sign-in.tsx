import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function signIn(): JSX.Element {

    const router = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:'8%'}} onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <View style={styles.text_container}>
        <Text style={{ fontFamily: "Outfit-Bold", fontSize: 30 }}>
          Let's Sign You In
        </Text>
        <Text
          style={{ fontFamily: "Outfit", fontSize: 25, color: Colors.Grey }}
        >
          Welcome Back
        </Text>
        <Text
          style={{ fontFamily: "Outfit", fontSize: 25, color: Colors.Grey }}
        >
          You've been missed!
        </Text>
      </View>
      <View style={styles.input_wrapper}>
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
          {/* Sign In Button */}
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontFamily: "product-sans",
                fontSize: 15,
                textAlign: "center",
                color: "#fff",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          {/* Creat Account In Button */}
          <TouchableOpacity style={styles.button_secondary}
          onPress={()=>router.replace('/sign-up')}>
            <Text
              style={{
                fontFamily: "product-sans",
                fontSize: 15,
                textAlign: "center",
                color: "#000",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 30,
    height: "100%",
  },
  text_container: {
    gap: 15,
    alignItems: "flex-start",
  },
  input_wrapper: {
    marginLeft:10,
    justifyContent: "center",
    height: "60%",
    gap: 20,
    marginTop: 20,
  },
  input: {
    fontFamily: "Outfit",
    fontSize: 13,
    width: "95%",
    padding: 10,
    borderRadius: 15,
    borderColor: Colors.Grey,
    borderWidth: 2,
  },
  button: {
    backgroundColor: Colors.button_primery,
    width: "95%",
    padding: 14,
    borderRadius: 10,
    marginBottom: "5%",
  },
  button_secondary: {
    backgroundColor: "#fff",
    borderWidth: 2,
    width: "95%",
    padding: 14,
    borderRadius: 10,
    marginBottom: "5%",
  },
});
