import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CopyRightsProps {
  Icon?: any;
  style?: ViewStyle;
  onPressPrivacy?: () => void;
  onPressTerms?: () => void;
  onPressCookies?: () => void;
}

export const CopyRightsSection = ({
  onPressPrivacy,
  onPressTerms,
  onPressCookies,
  style,
}: CopyRightsProps) => {
  return (
    <View style={[styles.container, style]}>
      <Typography style={styles.text1}>
        ©2021 Cantaloupe, Inc. All Rights
      </Typography>
      <Typography style={styles.text1}>Reserved.</Typography>
      <TouchableOpacity onPress={onPressPrivacy}>
        <Typography style={[styles.text2, {marginTop: hp('2%')}]}>
          Privacy Policy
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTerms}>
        <Typography style={styles.text2}>Terms of Use</Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCookies}>
        <Typography style={styles.text2}>Cookie Policy</Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('5%'),
  },

  text1: {
    fontWeight: 'normal',
    fontSize: hp('2.5%'),
    color: COLORS.black,
  },
  text2: {
    fontWeight: 'normal',
    fontSize: hp('2.2%'),
    color: COLORS.gray1,
    marginVertical: hp('0.5%'),
  },
});
