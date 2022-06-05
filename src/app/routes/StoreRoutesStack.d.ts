import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StoreParams = {
  Home: undefined;
};

export type StoreNavigationProp<RouteName extends keyof StoreParams> =
  NativeStackNavigationProp<StoreParams, RouteName>;

export type StoreRouteProp<RouteName extends keyof StoreParams> = RouteProp<
  StoreParams,
  RouteName
>;
