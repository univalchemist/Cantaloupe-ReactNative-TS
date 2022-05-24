import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ScreenOptionProps {
  Icon?: any;
  text?: string;
  style?: ViewStyle;
  onPress?: () => void;
}

export const ScreenOption = ({Icon, text, style}: ScreenOptionProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Icon fill={COLORS.orange1} width={wp('8%')} />

      <Typography style={styles.text}>{text}</Typography>
      <RightArrow width={wp('4%')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.5%'),
    width: wp('85%'),
    alignSelf: 'center',
  },

  text: {
    fontWeight: '600',
    fontSize: hp('2.5%'),
    color: COLORS.black,
    flex: 1,
    marginLeft: wp('2.5%'),
  },
});
