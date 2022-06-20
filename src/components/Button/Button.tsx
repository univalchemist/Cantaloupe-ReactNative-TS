import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface IButtonProps {
  onPress: () => void;
  title?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  leftIcon?: any;
}
export const Button = ({
  title,
  onPress,
  style,
  titleStyle,
  leftIcon,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {flexDirection: leftIcon ? 'row' : 'column'},
      ]}
      activeOpacity={0.8}>
      {leftIcon}
      <Typography
        style={[styles.title, titleStyle, {marginLeft: leftIcon && 8}]}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    minHeight: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: COLORS.white,
  },
});
