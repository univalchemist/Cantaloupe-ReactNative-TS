import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {ProfileIcon, LogoMoreSmall} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface HeaderProps {
  onPressRight: () => void;
  style?: ViewStyle;
}

export const Header = ({style, onPressRight}: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <LogoMoreSmall width={wp('27%')} />
      <TouchableOpacity onPress={onPressRight} style={styles.rightTitle}>
        <ProfileIcon width={wp('8.5%')} height={hp('8%')} />
        <Typography style={styles.profileTxt}>Profile</Typography>
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
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTxt: {
    fontWeight: '500',
    fontSize: hp('2%'),
    color: COLORS.orange,
    marginLeft: wp('1.7%'),
  },
});
