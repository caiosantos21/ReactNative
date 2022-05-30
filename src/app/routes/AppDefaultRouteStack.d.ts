import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
  TreinoHome: undefined;
  DefaultApp: undefined;
};

export type HomeNavigationProp<RouteName extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, RouteName>;

export type ExamsRouteProp<RouteName extends keyof AppStackParamList> =
  RouteProp<AppStackParamList, RouteName>;
