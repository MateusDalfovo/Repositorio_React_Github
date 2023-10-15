import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaRepositorios from './src/components/ListaRepositorios';
import Home from './src/components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
        <Stack.Screen name="ListaRepositorios" component={ListaRepositorios} options={{ title: 'Meus Repositórios' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
