// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyaG-QvS3-f3xT2AxWW36g1MGZi6szvlM",
    authDomain: "n22-final.firebaseapp.com",
    projectId: "n22-final",
    storageBucket: "n22-final.firebasestorage.app",
    messagingSenderId: "422657539006",
    appId: "1:422657539006:web:d21243cf22d7b2526897ef",
    measurementId: "G-Z6TJ3EEFNZ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let auth;
// Initialize Firebase
if (Platform.OS === "web") {
  // For web, use a different persistence method
  auth = initializeAuth(app);
} else {
  // For mobile, use React Native AsyncStorage
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { auth, db };
