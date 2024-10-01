import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DishList from '../components/DishList';
import BottomNavigationBar from '../components/BottomNavigationBar';

interface Props {
  navigation: any;
}

const MenuScreen: React.FC<Props> = ({ navigation }) => {
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

  const handleFilter = (category: string) => {
    const filteredDishes = dishes.filter((dish) => dish.category === category);
    setDishes(filteredDishes);
  };

  return (
    <View style={styles.container}>
      <DishList dishes={dishes} onFilter={handleFilter} />
      <BottomNavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MenuScreen;