import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {TickIcon} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '@components/Button/Button';

interface AutoReloadDoneProps {
  belowBalance?: any;
  style?: ViewStyle;
  chargedBalance?: number;
  handleBackHome?: () => void;
}

export const AutoReloadDone = ({
  belowBalance,
  chargedBalance,
  style,
  handleBackHome,
}: AutoReloadDoneProps) => {
  return (
    <View style={[styles.CardTypeContainer, style]}>
      <TickIcon style={{alignSelf: 'center'}} width={wp('36%')} />
      <Typography style={styles.doneTxt}>Done</Typography>
      <Typography style={styles.laodedBalanceTxt}>
        Whenever the balance of
      </Typography>
      <Typography style={styles.laodedBalanceTxt}>
        your More pass falls below
      </Typography>
      <Typography style={styles.laodedBalanceTxt}>
        ${belowBalance}, we'll will charge your bank
      </Typography>
      <Typography style={styles.laodedBalanceTxt}>
        credit card ${chargedBalance}
      </Typography>

      <Button
        onPress={handleBackHome}
        title="Back To Home"
        leftIcon={null}
        style={styles.homeBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    marginTop: hp('20%'),
    alignSelf: 'center',
    width: wp('90%'),
  },

  doneTxt: {
    fontWeight: '400',
    fontSize: hp('4%'),
    color: COLORS.orange,
    marginVertical: hp('1%'),
    alignSelf: 'center',
  },
  laodedBalanceTxt: {
    fontWeight: '400',
    fontSize: hp('2.8%'),
    color: COLORS.gray,
    marginVertical: hp('0.2%'),
    alignSelf: 'center',
  },
  homeBtn: {
    marginTop: hp('10%'),
  },
});
