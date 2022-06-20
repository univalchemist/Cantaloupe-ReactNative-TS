import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '@theme/color';
import {Back} from '@assets/icon';

interface HeaderProps {
  onPressLeft: () => void;
  style?: ViewStyle;
}

export const BackButton = ({style, onPressLeft}: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={styles.backButtonContainer}>
        <Back style={styles.rightArrow} fill={COLORS.gray} />
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: wp('90%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('1.2%'),
  },
  rightArrow: {},
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
    color: COLORS.gray,
  },
});
