import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabRoute from './src/app/routes/StoreRoutes';

// import {UrlImage} from './src/Components/UrlImage';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabRoute />
    </NavigationContainer>
  );
};

export default App;
