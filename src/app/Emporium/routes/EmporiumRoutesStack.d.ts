import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type EmporiumParams = {
  Emporium: undefined;
};

export type EmporiumStackNavigation<RouteName extends keyof EmporiumParams> =
  NativeStackNavigationProp<EmporiumParams, RouteName>;

export type EmporiumRoute<RouteName extends keyof EmporiumParams> = RouteProp<
  EmporiumParams,
  RouteName
>;
