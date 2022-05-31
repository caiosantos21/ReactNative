import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SignIn } from '../Pages/Signin';

const Stack = createNativeStackNavigator();

export const LoginRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
