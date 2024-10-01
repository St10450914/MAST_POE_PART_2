import React, { useState } from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';

interface Props {
  onSubmit: (dish: {
    name: string;
    description: string;
    price: number;
    category: string;
  }) => void;
}

const DishForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, description, price, category });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter dish name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter description"
      />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price.toString()}
        onChangeText={(text) => setPrice(parseFloat(text))}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label ="Main Course" value="main course" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DishForm;