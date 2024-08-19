import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
import { useState } from "react";
import { handelLoginError, notifyMessage, ToastType } from "@/utils/platformUtils";
import Feather from '@expo/vector-icons/Feather';

export default function signIn(): JSX.Element {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State variable to track password visibility
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    // Function to toggle the password visibility state
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const onUserLogin = () => {
      if(email === '' || password === ''){
        alert('Please fill all the fields');
        notifyMessage('Please fill all the fields',ToastType.SHORT);
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Login Successfully');
        notifyMessage('Login Successfully',ToastType.TOP);
        router.replace('/myTrip');
        const user = userCredential.user;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        handelLoginError(errorCode,errorMessage);
      });
    };
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
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Enter you'r email address"
          />
        </View>
        <View>
          <Text style={{ fontFamily: "Outfit", fontSize: 15 }}>Password</Text>
          <TouchableOpacity onPress={toggleShowPassword} style={styles.Icon}>
            {showPassword ?(
              <Feather name="eye-off" size={22} color={Colors.Grey} />
            ):(
              <Feather name="eye" size={22} color={Colors.Grey} />
            )}
          </TouchableOpacity>
          <TextInput onChangeText={(pass) => setPassword(pass)} placeholder="Enter you'r password"
 secureTextEntry={showPassword} style={styles.input} />
        </View>
        {/* Button Section */}
        <View style={{marginTop:30}}>
          {/* Sign In Button */}
          <TouchableOpacity style={styles.button} onPress={onUserLogin}>
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
    position:'relative',
    fontFamily: "Outfit",
    fontSize: 14,
    width: "95%",
    padding: 10,
    borderRadius: 15,
    borderColor: Colors.Grey,
    borderWidth: 2,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 15,
  },
  Icon: {
    position:'absolute',
    right:'6%',
    top:'30%',
    padding: 12,
    zIndex: 1,
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
