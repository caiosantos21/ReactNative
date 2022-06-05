/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MainBody } from '../core/components/containers/MainBody';
import { MainContainer } from '../core/components/containers/MainContainer';
import { CustomListItem } from '../core/components/ui';
import { StoreNavigationProp, StoreParams } from './routes/StoreRoutesStack';

export const Home = () => {
  const navigation = useNavigation<StoreNavigationProp<'Home'>>();

  const navigateTo = (screen: keyof StoreParams) => {
    navigation.navigate(screen);
  };

  return (
    <MainBody>
      <MainContainer>
        <CustomListItem
          description={'TreinoHome'}
          // onPress={() => navigateTo('TreinoHome')}
        />
      </MainContainer>
    </MainBody>
  );
};
