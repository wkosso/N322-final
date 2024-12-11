import React from 'react';
import { View, Text,FlatList, Image, StyleSheet, ScrollView } from 'react-native';

export default function ListProductsPage() {
  const products = [
    { id: 1, name: "Air Jordan Retro 4", price: 99, image: require('../../assets/images/shoe1.webp') },
    { id: 2, name: "Air Jordan Retro 5", price: 120, image: require('../../assets/images/DD0587_110.webp') },
    { id: 3, name: "Air Jordan Retro 1", price: 120, image: require('../../assets/images/CZ0790_140.webp') },
    { id: 4, name: "Nike Air Vapor Max", price: 110, image: require('../../assets/images/924453_100.webp') },
    { id: 5, name: "Nike Air Vapor Max", price: 140, image: require('../../assets/images/924453_004.webp') },
    { id: 6, name: "New balance", price: 130, image: require('../../assets/images/U9060BLK_001.webp') },
    { id: 7, name: "Timberland", price: 150, image: require('../../assets/images/10061713_231.webp') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Shop Our Collection</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>Details</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  productItem: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '30%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  detailsButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#0056b3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    alignSelf: 'center',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
