import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { TripDetailsContext } from "../context/TripDetailsContext";
import React from "react";

export default function RootLayout() {

  const [tripData, setTripData] = React.useState<any>();

  const [isFontLoad] = useFonts({
    "Outfit-Bold": require("./../assets/fonts/Outfit/static/Outfit-Bold.ttf"),
    "Outfit-SemiBold": require("./../assets/fonts/Outfit/static/Outfit-SemiBold.ttf"),
    "Outfit": require("./../assets/fonts/Outfit/static/Outfit-Regular.ttf"),
    "Outfit-md": require("./../assets/fonts/Outfit/static/Outfit-Medium.ttf"),
    "Outfit-light": require("./../assets/fonts/Outfit/static/Outfit-Light.ttf"),
    "product-sans": require("./../assets/fonts/Product_Sans.ttf"),
  });
  if(!isFontLoad) return null;
  return (
    <TripDetailsContext.Provider value={{tripData,setTripData}}>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" />
      </Stack>
    </TripDetailsContext.Provider>
  );
}
