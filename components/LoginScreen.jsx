import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../assets/images/Untitled-1.png')} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>
          Learn <Text style={styles.techspace}>CODE!</Text>
        </Text>
        <Text style={styles.tagLineSub}>Come and check us out!</Text>
        <Text style={styles.tagLine}>
          We are located in the heart of the big city. This is where it all happens!
        </Text>
        <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('SignUp')} // Correct way to navigate to the SignUp screen
    >
      <Text style={styles.whiteText}>Sign Up Today</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light gray for a clean look
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200, // Adjusted for a modern size
    height: 200,
    resizeMode: 'contain', // Ensures the image doesn't distort
  },
  subContainer: {
    padding: 20,
    alignItems: 'center',
  },
  tagLineTop: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Dark gray for professional text
    textAlign: 'center',
    marginBottom: 10,
  },
  tagLineSub: {
    fontSize: 20,
    color: '#555', // Medium gray for subtle emphasis
    textAlign: 'center',
    marginBottom: 10,
  },
  tagLine: {
    fontSize: 16,
    color: '#777', // Lighter gray for less emphasis
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24, // Better readability
  },
  techspace: {
    color: Colors.GOLD_TEXT || '#FFC107', // Gold for standout text
  },
  btn: {
    backgroundColor: Colors.GOLD_TEXT || '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Smooth rounded corners
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5, 
  },
  whiteText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});
