import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    "Outfit-Bold": require("./../assets/fonts/Outfit/static/Outfit-Bold.ttf"),
    "Outfit-semiBold": require("./../assets/fonts/Outfit/static/Outfit-SemiBold.ttf"),
    "Outfit": require("./../assets/fonts/Outfit/static/Outfit-Regular.ttf"),
    "Outfit-md": require("./../assets/fonts/Outfit/static/Outfit-Medium.ttf"),
    "Outfit-light": require("./../assets/fonts/Outfit/static/Outfit-Light.ttf"),
    "product-sans": require("./../assets/fonts/Product_Sans.ttf"),
  });
  
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
