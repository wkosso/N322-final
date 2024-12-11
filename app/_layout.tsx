// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
// import { Slot } from 'expo-router'
// import { useColorScheme } from '@/hooks/useColorScheme';




// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {

//   const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ClerkProvider publishableKey={publishableKey}>
//       <ClerkLoaded>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }





// import { View, Text } from "react-native";
// import {
//   ClerkLoaded,
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
// } from "@clerk/clerk-expo";
// import { Stack } from "expo-router";
// import LoginScreen from "./../components/LoginScreen.jsx"


// export default function RootLayout() {
//   const publisheKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

//   if (!publisheKey) {
//     throw new Error(
//       "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your env file."
//     );
//   }
//   return (
//     <ClerkProvider publishableKey={publisheKey}>
//       <ClerkLoaded>
//         <SignedIn>
//           <Stack
//             screenOptions={{
//               headerShown: false,
//             }}
//           >
//             <Stack.Screen name="./(tabs)/_layout" />
//           </Stack>
//         </SignedIn>
//         <SignedOut>
//          <LoginScreen></LoginScreen>
//         </SignedOut>
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }


// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
// import { Slot } from 'expo-router'
// import { useColorScheme } from '@/hooks/useColorScheme';




// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {

//   const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ClerkProvider publishableKey={publishableKey}>
//       <ClerkLoaded>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }




import { tokenCache } from '@/cache'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  )
}