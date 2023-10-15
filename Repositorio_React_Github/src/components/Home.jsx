import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaRepositorios')}>
        <Text style={styles.text}>Ver Repositórios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },

  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },

  text: {
    color: 'white'
  },

  title:{
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Home;
