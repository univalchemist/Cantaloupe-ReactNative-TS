import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {OrangePlus} from '@assets/icon';
import {Typography} from '@components/index';
import {COLORS} from '@theme/color';

interface AddMoreCardProps {
  onPress: () => void;
}

export const AddMoreCard = ({onPress}: AddMoreCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.plusContainer}>
          <OrangePlus />
        </View>
        <View style={styles.textContainer}>
          <Typography style={styles.text}>Add More Card</Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 25,
    marginLeft: 20,
  },
  plusContainer: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {alignSelf: 'center'},
  text: {
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.secondaryGray,
    fontWeight: '500',
  },
});
