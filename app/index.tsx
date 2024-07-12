import Login from "@/components/Login";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const user = auth.currentUser;
  return (
    <View style={{height:'100%'}}>
      {user ? <Redirect href="/myTrip" /> : <Login /> }
    </View>
  );
}
