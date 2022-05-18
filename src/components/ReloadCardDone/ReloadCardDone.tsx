import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {TickIcon} from '@assets/icon';

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
      <Typography style={[styles.laodedBalanceTxt, {marginVertical: 5}]}>
        You successfully added ${loadedBalance}
      </Typography>
      <Typography style={styles.laodedBalanceTxt}>to your More pass</Typography>
      <Typography style={styles.newBalanceTxt}>
        Your new balance is{' '}
        <Typography
          style={[
            styles.newBalanceTxt,
            {fontWeight: 'bold', color: COLORS.black},
          ]}>
          ${newBalance}
        </Typography>
      </Typography>
      <TickIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneTxt: {
    marginTop: '48%',
    fontWeight: '400',
    fontSize: 35,
    color: COLORS.orange,
    marginVertical: 5,
  },
  laodedBalanceTxt: {
    fontWeight: '400',
    fontSize: 24,
    color: COLORS.gray1,
  },
  newBalanceTxt: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.gray1,
    flex: 1,
    marginVertical: 20,
  },
});
