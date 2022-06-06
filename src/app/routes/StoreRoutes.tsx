// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import React from 'react';
import { Home } from '..';
import { Emporium } from '../Emporium';
import ForgeRoutes from '../Forge/routes/ForgeRoutes';
import { StoreParams } from './StoreRoutesStack';

const BottomTab = createBottomTabNavigator<StoreParams>();

export default function BottomTabRoute() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Forge"
        component={ForgeRoutes}
        options={{
          tabBarLabel: 'Forge',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="fireplace" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Emporium"
        component={Emporium}
        options={{
          tabBarLabel: 'Emporium',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="storefront" type="material" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
