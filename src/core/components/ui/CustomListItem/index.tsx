import { Icon, ListItem } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomListItemProps } from './CustomListItem';

export const CustomListItem = ({
  description,
  subtitle,
  onPress,
  leftIcon,
  leftIconType,
  rightIcon,
  rightIconType,
}: CustomListItemProps) => {
  console.log(leftIcon, leftIconType);
  return (
    <>
      <ListItem Component={TouchableOpacity} bottomDivider onPress={onPress}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            type={leftIconType ? leftIconType : 'material'}
          />
        )}
        <ListItem.Content>
          <ListItem.Title>{description}</ListItem.Title>
          {subtitle && <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>}
        </ListItem.Content>
        {rightIcon ? (
          <Icon
            name={rightIcon}
            type={rightIconType ? rightIconType : 'material'}
          />
        ) : (
          <ListItem.Chevron />
        )}
      </ListItem>
    </>
  );
};
