import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DishForm from '../components/DishForm';
import BottomNavigationBar from '../components/BottomNavigationBar';

interface Props {
  navigation: any;
}

const UploadScreen: React.FC<Props> = ({ navigation }) => {
  const [dish, setDish] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
  });

  const handleSubmit = () => {
    navigation.navigate('Selection', { dish });
  };

  return (
    <View style={styles.container}>
      <DishForm onSubmit={handleSubmit} />
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

export default UploadScreen;