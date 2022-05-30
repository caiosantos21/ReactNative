import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MainBody } from '../core/components/containers/MainBody';
import { MainContainer } from '../core/components/containers/MainContainer';
import { CustomListItem } from '../core/components/ui';
import {
  AppStackParamList,
  HomeNavigationProp,
} from './routes/AppDefaultRouteStack';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp<'Home'>>();

  const navigateTo = (screen: keyof AppStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <MainBody>
      <MainContainer>
        <CustomListItem
          description={'TreinoHome'}
          onPress={() => navigateTo('TreinoHome')}
        />

        <CustomListItem
          description={'DefaultApp'}
          onPress={() => navigateTo('DefaultApp')}
        />
      </MainContainer>
    </MainBody>
  );
};
