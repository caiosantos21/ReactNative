import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Emporium } from '..';
import { EmporiumParams } from './EmporiumRoutesStack';

const ForgeRoutesStack = createNativeStackNavigator<EmporiumParams>();
// const ForgeRoutesStack = createForgeRoutesStackNavigator<StoreParams>();

export default function ForgeRoutes() {
  return (
    <ForgeRoutesStack.Navigator screenOptions={{}}>
      <ForgeRoutesStack.Screen
        name="Emporium"
        component={Emporium}
        options={{}}
      />
    </ForgeRoutesStack.Navigator>
  );
}
