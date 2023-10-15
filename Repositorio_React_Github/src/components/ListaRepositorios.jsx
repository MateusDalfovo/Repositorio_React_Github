import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ReposList = ({ navigation }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/MateusDalfovo/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter repositórios', error);
      }
    };

    fetchData();
  }, []);


  return (
    <View>
      <Text>Lista de Repositórios do GitHub</Text>
      <FlatList
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
        )}
      />
    </View>
  );
};


export default ReposList;
