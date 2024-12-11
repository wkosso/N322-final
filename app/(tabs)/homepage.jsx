import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Homepage() {
  return (
    <ScrollView style={styles.scrollView}>
     
      <View style={styles.container}>
      
        {/* Welcome Section */}
        <Text style={styles.heading}>Welcome to SneakerHub!</Text>
        <Link href="/sign-up/[[...sign-up]]/page">SIGN UP</Link>
        <Link href="/sign-in/[[...sign-in]]/page">SIGN IN</Link>
        <Text style={styles.introText}>Browse Our Collection</Text>
        <Text style={styles.sectionText}>
          Explore the latest styles, from classic sneakers to cutting-edge designs. Whether you're looking for comfort, style, or performance, we have something for every sneakerhead.
        </Text>
        <Image source={require('../../assets/images/tal-womens-sneakers-may-24-test-veja-womens-campo-low-top-heer-chaudri-10-9a8fff305d994f2e9b5f64db7c766f64.jpeg')} style={styles.image} />

        {/* Your Sneaker, Your Choice */}
        <Text style={styles.sectionTitle}>Your Sneaker, Your Choice</Text>
        <Text style={styles.sectionText}>
          Create a sneaker to manage, add your sneaker to our store, and stay updated on new releases. Customize colors, materials, and designs to create your perfect pair. 
          Start building your unique collection today!
        </Text>
        <Image source={require('../../assets/images/sneaker2.jpg')} style={styles.image} />

        {/* Stay Ahead of the Game */}
        <Text style={styles.sectionTitle}>Stay Ahead of the Game</Text>
        <Text style={styles.sectionText}>
          Join the SneakerHub community to get exclusive updates on new drops, restocks, and special offers. Be the first to know about limited-edition releases, collaborations, and more!
        </Text>
        <Image source={require('../../assets/images/sneaker3.jpg')} style={styles.image} />

        {/* Shop Our Bestsellers */}
        <Text style={styles.sectionTitle}>Shop Our Bestsellers</Text>
        <Text style={styles.sectionText}>
          Check out our top-selling sneakers that everyone is talking about. These styles are going fast, so don’t miss out! Get yours now and stay ahead of the trend.
        </Text>
        <Image source={require('../../assets/images/sneaker4.jpg')} style={styles.image} />

        {/* Call to Action */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>Ready to step up your game?</Text>
          <Text style={styles.ctaSubText}>Browse our collection and find your perfect fit today!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f4f4f4', // Background for entire page
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 'auto',
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  introText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#444',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 16,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  image: {
    width: '70%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  ctaContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#0056b3',
    borderRadius: 10,
    marginVertical: 20,
  },
  ctaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  ctaSubText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
