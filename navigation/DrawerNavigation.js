import React from 'react';
// Importa a função createDrawerNavigator da biblioteca @react-navigation/drawer
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importa o componente TabNavigator do arquivo "./TabNavigator"
import TabNavigator from "./TabNavigator";

// Importa o componente Profile do diretório "../screens"
import Profile from "../screens/Profile";

// Cria uma instância do Drawer Navigator
const Drawer = createDrawerNavigator();

// Declaração do componente DrawerNavigator, responsável por configurar a navegação em gaveta
const DrawerNavigator = () => {
    // Retorna o componente DrawerNavigator que define as opções de navegação em gaveta
    return (
        <Drawer.Navigator>
            {/* Define uma tela chamada "Tela Inicial" associada ao componente TabNavigator */}
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            {/* Define uma tela chamada "Perfil" associada ao componente Profile */}
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

// Exporta o componente DrawerNavigator como padrão
export default DrawerNavigator;