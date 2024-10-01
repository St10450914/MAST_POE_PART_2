import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DishCard from './DishCard';

interface Props {
  dishes: {
    name: string;
    description: string;
    price: number;
    category: string;
  }[];
  onFilter: (category: string) => void;
}

const DishList: React.FC<Props> = ({ dishes, onFilter }) => {
  const handleFilter = (category: string) => {
    onFilter(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.filter}>
        <TouchableOpacity onPress={() => handleFilter('starter')}>
          <Text>Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('main course')}>
          <Text>Main Course</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('dessert')}>
          <Text>Dessert</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dishes}
        renderItem={({ item }) => <DishCard dish={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default DishList;