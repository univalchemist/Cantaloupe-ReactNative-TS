import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface TermsAndConditionProps {
  onPress?: () => void;
}
const Texts = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string;
}) => {
  return (
    <View style={styles.textContainer}>
      <Typography style={styles.text}>{leftText}</Typography>
      <Typography style={styles.text}>{'.'}</Typography>

      <Typography style={styles.text}>{rightText}</Typography>
    </View>
  );
};

export const TermsAndConditionText = ({onPress}: TermsAndConditionProps) => {
  return (
    <View style={styles.container}>
      <Texts leftText="TERMS AND CONDITION" rightText="PRIVACY NOTICE" />
      <Texts leftText="MANAGE COOKIES" rightText="YOUR PROFILE" />
      <Texts leftText="FEEDBACK" rightText="SESSION ID" />
      <Typography style={styles.copyrightTxt}>
        Copyright @2022 MasterCard. All Rights Reserved
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp('2%'),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: wp('90%'),
    marginVertical: hp('0.5%'),
  },

  text: {
    fontSize: hp('1.8%'),
    fontWeight: '700',
    color: COLORS.primaryGray,
    textAlign: 'right',
  },
  copyrightTxt: {
    fontSize: hp('1.6%'),
    color: COLORS.primaryGray,
    alignSelf: 'center',
    marginTop: hp('2%'),
    fontWeight: '600',
  },
});
