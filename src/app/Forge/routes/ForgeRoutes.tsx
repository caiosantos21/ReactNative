import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Forge } from '..';
import { ForgeParams } from './ForgeRoutesStack';

const ForgeRoutesStack = createNativeStackNavigator<ForgeParams>();
// const ForgeRoutesStack = createForgeRoutesStackNavigator<StoreParams>();

export default function ForgeRoutes() {
  return (
    <ForgeRoutesStack.Navigator screenOptions={{}}>
      <ForgeRoutesStack.Screen
        name="ForgeHome"
        component={Forge}
        options={{}}
      />
    </ForgeRoutesStack.Navigator>
  );
}
