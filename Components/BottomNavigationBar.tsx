import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface Props {
  navigation: any;
}

const BottomNavigationBar: React.FC<Props> = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="ios-restaurant" size={24} color="#333" />
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Selection')}>
        <Ionicons name="ios-list" size={24} color="#333" />
        <Text>Selection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
        <Ionicons name="ios-cloud-upload" size={24} color="#333" />
        <Text>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationBar;