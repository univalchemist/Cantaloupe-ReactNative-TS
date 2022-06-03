import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {TickIcon} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ReloadCardDoneProps {
  loadedBalance?: any;
  style?: ViewStyle;
  newBalance?: string;
}

export const ReloadCardDone = ({
  loadedBalance,
  newBalance,
  style,
}: ReloadCardDoneProps) => {
  return (
    <View style={[styles.CardTypeContainer, style]}>
      <Typography style={styles.doneTxt}>Done</Typography>
      <Typography style={[styles.laodedBalanceTxt, {marginVertical: hp('1%')}]}>
        You successfully added ${loadedBalance}
      </Typography>
      <Typography style={styles.laodedBalanceTxt}>to your More pass</Typography>
      <Typography style={styles.newBalanceTxt}>
        Your new balance is{' '}
        <Typography
          style={[
            styles.newBalanceTxt,
            // eslint-disable-next-line react-native/no-inline-styles
            {fontWeight: 'bold', color: COLORS.black},
          ]}>
          ${newBalance}
        </Typography>
      </Typography>
      <TickIcon width={wp('36%')} />
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneTxt: {
    marginTop: hp('10%'),
    fontWeight: '400',
    fontSize: hp('4%'),
    color: COLORS.orange,
    marginVertical: hp('1%'),
  },
  laodedBalanceTxt: {
    fontWeight: '400',
    fontSize: hp('3%'),
    color: COLORS.gray,
  },
  newBalanceTxt: {
    fontWeight: '400',
    fontSize: hp('2%'),
    color: COLORS.gray,
    marginVertical: hp('2.5%'),
  },
});
