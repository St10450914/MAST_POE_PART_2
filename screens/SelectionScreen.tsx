import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DishCard from '../components/DishCard';
import BottomNavigationBar from '../components/BottomNavigationBar';

interface Props {
  navigation: any;
}

const SelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [dishes, setDishes] = useState([
    {
      name: 'Dish 1',
      description: 'Description 1',
      price: 10.99,
      category: 'starter',
    },
    {
      name: 'Dish 2',
      description: 'Description 2',
      price: 12.99,
      category: 'main course',
    },
    {
      name: 'Dish 3',
      description: 'Description 3',
      price: 8.99,
      category: 'dessert',
    },
  ]);

  const handleAdd = (dish: {
    name: string;
    description: string;
    price: number;
    category: string;
  }) => {
    setDishes([...dishes, dish]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dishes}
        renderItem={({ item }) => (
          <DishCard dish={item} />
        )}
        keyExtractor={(item) => item.name}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <BottomNavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SelectionScreen;