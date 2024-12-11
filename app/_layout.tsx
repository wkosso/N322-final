// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

import { View, Text } from "react-native";
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import LoginScreen from "./../components/LoginScreen.jsx"


export default function RootLayout() {
  const publisheKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publisheKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your env file."
    );
  }
  return (
    <ClerkProvider publishableKey={publisheKey}>
      <ClerkLoaded>
        <SignedIn>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="./(tabs)/_layout" />
          </Stack>
        </SignedIn>
        <SignedOut>
         <LoginScreen></LoginScreen>
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}