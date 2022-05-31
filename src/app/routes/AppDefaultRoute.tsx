import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginRoutes } from '../Aula 9/Routes';
import { DefaultComponent } from '../DefaultComponent';
import { Home } from '../Home';
import { TreinoHome } from '../Treino';
import { AppStackParamList } from './AppDefaultRouteStack';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AppDefaultRoute() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="TreinoHome" component={TreinoHome} />
        <AppStack.Screen name="DefaultApp" component={DefaultComponent} />
        <AppStack.Screen name="LoginRoutes" component={LoginRoutes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
