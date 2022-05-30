export interface CustomListItemProps {
  description: string;
  subtitle?: string;
  onPress?(): void;
  leftIcon?: string;
  leftIconType?: string;
  rightIcon?: string;
  rightIconType?: string;
}
