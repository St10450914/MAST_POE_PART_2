import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  dish: {
    name: string;
    description: string;
    price: number;
    category: string;
  };
}

const DishCard: React.FC<Props> = ({ dish }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>${dish.price}</Text>
      <Text style={styles.category}>{dish.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
});

export default DishCard;