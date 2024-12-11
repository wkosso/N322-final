import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { db } from '../../FirebaseConfig'; // Firebase config
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

const ShoesPage = () => {
  const [shoes, setShoes] = useState([]);
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      const snapshot = await getDocs(collection(db, 'shoes'));
      const shoesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setShoes(shoesData);
    };
    fetchShoes();
  }, []);

  const handleAddShoe = async () => {
    if (!brand || !size || !price) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    const newShoe = { brand, size, price };
    try {
      const docRef = await addDoc(collection(db, 'shoes'), newShoe);
      setShoes([...shoes, { id: docRef.id, ...newShoe }]);
      setBrand('');
      setSize('');
      setPrice('');
    } catch (error) {
      Alert.alert('Error', 'Error adding shoe');
    }
  };

  const handleEditShoe = (id) => {
    const shoe = shoes.find((shoe) => shoe.id === id);
    setBrand(shoe.brand);
    setSize(shoe.size);
    setPrice(shoe.price);
    setEditId(id);
  };

  const handleUpdateShoe = async () => {
    if (!brand || !size || !price) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      const shoeRef = doc(db, 'shoes', editId);
      await updateDoc(shoeRef, { brand, size, price });
      setShoes(
        shoes.map((shoe) =>
          shoe.id === editId ? { ...shoe, brand, size, price } : shoe
        )
      );
      setBrand('');
      setSize('');
      setPrice('');
      setEditId(null);
    } catch (error) {
      Alert.alert('Error', 'Error updating shoe');
    }
  };

  const handleDeleteShoe = async (id) => {
    try {
      await deleteDoc(doc(db, 'shoes', id));
      setShoes(shoes.filter((shoe) => shoe.id !== id));
    } catch (error) {
      Alert.alert('Error', 'Error deleting shoe');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shoe Inventory</Text>
      <TextInput
        style={styles.input}
        placeholder="Brand"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={editId ? handleUpdateShoe : handleAddShoe}
      >
        <Text style={styles.buttonText}>{editId ? 'Update Shoe' : 'Add Shoe'}</Text>
      </TouchableOpacity>

      <FlatList
        data={shoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.shoeItem}>
            <Text style={styles.shoeBrand}>{item.brand}</Text>
            <Text style={styles.shoeSize}>Size: {item.size}</Text>
            <Text style={styles.shoePrice}>Price: ${item.price}</Text>
            <TouchableOpacity onPress={() => handleEditShoe(item.id)} style={styles.editButton}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteShoe(item.id)}
              style={styles.deleteButton}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  shoeItem: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  shoeBrand: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shoeSize: {
    fontSize: 16,
  },
  shoePrice: {
    fontSize: 16,
    color: 'green',
  },
  editButton: {
    backgroundColor: 'orange',
    padding: 5,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    marginTop: 5,
  },
});

export default ShoesPage;
