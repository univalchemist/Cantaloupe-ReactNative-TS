import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface IButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}
export const Checkbox = ({title, onPress, style, titleStyle}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.8}>
      <Typography style={[styles.title, titleStyle]}>{title}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    minHeight: 64,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: COLORS.white,
  },
});
