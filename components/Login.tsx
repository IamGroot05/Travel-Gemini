import { Text, View, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React, { Component } from "react";
import { useRouter } from "expo-router";

export default function Login():JSX.Element {
        const router = useRouter();  
        return (
        <View style={{ height: "100%" }}>
            <Image
            style={{ width: "100%", height: 475 }}
            source={require("./../assets/images/AI-Travel-Planners.png")}
            />
            <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.text_bold}>Travel Gemini</Text>
                <Text style={styles.text_smaller}>AI Powered Trip Planner</Text>
                <Text
                style={{
                    marginTop: 10,
                    fontFamily: "Outfit",
                    fontSize: 15,
                    marginLeft: 20,
                    textAlign: "center",
                }}
                >
                Discover your next adventure effortlessly. Personalized
                itineraries at your fingertips. Travel smarter with Al-driven
                insights."
                </Text>
            </View>
            <Pressable onPress={()=>router.push('sign-in')} style={styles.button}>
                <Text
                style={{
                    fontFamily: "product-sans",
                    fontSize: 17,
                    textAlign: "center",
                    color: "#fff",
                }}
                >
                Get started
                </Text>
            </Pressable>
            </View>
        </View>
        );
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 25,
    height: "100%",
    marginTop: -25,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
 text_container: {
    alignItems: "center",
 },
  text_bold: {
    fontFamily: "Outfit-Bold",
    fontSize: 28,
  },
  text_smaller: {
    fontFamily: "Outfit",
    fontSize: 8,
  },
  button: {
    backgroundColor: "#1A1A1A",
    width: "90%",
    padding: 10,
    borderRadius: 99,
    marginTop: '5%',
    marginBottom: '5%',
  },
});
