import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {COLORS} from '@theme/color';

interface SeparatorProps {
  style?: ViewStyle;
}

export const Separator = ({style}: SeparatorProps) => {
  return <View style={[styles.separator, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
