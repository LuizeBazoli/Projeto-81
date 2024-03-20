// Importa o React da biblioteca 'react'
import React from 'react';

// Importa a função createBottomTabNavigator e o componente Ionicons da biblioteca '@react-navigation/bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importa os componentes Feed e CreateStory dos diretórios "../screens"
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

// Cria uma instância do Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Declaração do componente BottomTabNavigator, responsável por configurar a navegação inferior com abas
const BottomTabNavigator = () => {
  // Retorna o componente BottomTabNavigator que define as opções de navegação inferior com abas
  return (
    <Tab.Navigator
      // Define as opções para cada aba na barra de navegação inferior
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Lógica para definir o ícone com base no nome da rota
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused
              ? 'book' // Ícone quando a aba está focada
              : 'book-outline'; // Ícone quando a aba não está focada
          } else if (route.name === 'Criar Postagem') {
            iconName = focused ? 'create' : 'create-outline';
          }
          // Retorna o componente Ionicons com o ícone, tamanho e cor especificados
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      // Define as opções gerais da barra de navegação inferior
      tabBarOptions={{
        // Cor do ícone quando a aba está ativa (focada)
        activeTintColor: 'tomato',
        // Cor do ícone quando a aba não está ativa (não focada)
        inactiveTintColor: 'gray',
      }}>
      {/* Define a primeira aba chamada "Feed" associada ao componente Feed */}
      <Tab.Screen name="Feed" component={Feed} />
      {/* Define a segunda aba chamada "Criar História" associada ao componente CreateStory */}
      <Tab.Screen name="Criar Postagem" component={CreatePost} />
    </Tab.Navigator>
  );
};

// Exporta o componente BottomTabNavigator como padrão
export default BottomTabNavigator;