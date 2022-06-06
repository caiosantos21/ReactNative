import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ForgeParams = {
  ForgeHome: undefined;
};

export type ForgeStackNavigation<RouteName extends keyof ForgeParams> =
  NativeStackNavigationProp<ForgeParams, RouteName>;

export type ForgeRoute<RouteName extends keyof ForgeParams> = RouteProp<
  ForgeParams,
  RouteName
>;
