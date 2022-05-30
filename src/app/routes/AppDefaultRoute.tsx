import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from 'app/Home';
import React from 'react';
import { DefaultComponent } from '../DefaultComponent';
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
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
