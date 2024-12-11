import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [sneakers, setSneakers] = useState([]);
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Tracks which sneaker is being edited

  const handleAddOrUpdateSneaker = () => {
    if (brand.trim() !== '' && size.trim() !== '' && price.trim() !== '') {
      const newSneaker = `${brand} - Size: ${size} - Price: $${price}`;

      if (editingIndex !== null) {
        // If editing an existing sneaker, update it
        const updatedSneakers = [...sneakers];
        updatedSneakers[editingIndex] = newSneaker;
        setSneakers(updatedSneakers);
        setEditingIndex(null); // Reset editing state
      } else {
        // If adding a new sneaker, add it to the list
        setSneakers([...sneakers, newSneaker]);
      }

      // Clear input fields
      setBrand('');
      setSize('');
      setPrice('');
    }
  };

  const handleDeleteSneaker = (index) => {
    setSneakers(sneakers.filter((_, i) => i !== index));
  };

  const handleEditSneaker = (index) => {
    const sneakerToEdit = sneakers[index].split(' - ');
    const brand = sneakerToEdit[0];
    const size = sneakerToEdit[1].replace('Size: ', '');
    const price = sneakerToEdit[2].replace('Price: $', '');

    setBrand(brand);
    setSize(size);
    setPrice(price);
    setEditingIndex(index); // Set the index of the sneaker being edited
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sneaker Inventory</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Enter sneaker brand"
      />
      <TextInput
        style={styles.input}
        value={size}
        onChangeText={setSize}
        placeholder="Enter sneaker size"
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter sneaker price"
        keyboardType="numeric"
      />
      <Button
        title={editingIndex !== null ? "Update Sneaker" : "Add Sneaker"}
        onPress={handleAddOrUpdateSneaker}
        color="#ff7f00"
      />
      
      <FlatList
        data={sneakers}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() => handleEditSneaker(index)}
                color="blue"
              />
              <Button
                title="Delete"
                onPress={() => handleDeleteSneaker(index)}
                color="red"
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
