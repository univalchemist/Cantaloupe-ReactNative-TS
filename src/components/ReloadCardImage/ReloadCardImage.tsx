import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface CardTypeProps {
  CardLogo?: any;
  cardNumber?: string;
  style?: ViewStyle;
  balance?: string;
}

export const ReloadCardImage = ({
  CardLogo,
  balance,
  cardNumber,
  style,
}: CardTypeProps) => {
  return (
    <View style={[styles.CardTypeContainer, style]}>
      {CardLogo}
      <View style={styles.balanceTxtCont}>
        <Typography style={styles.balance}>${balance}</Typography>
        <Typography style={styles.cardNo}>{cardNumber}</Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTxtCont: {
    marginLeft: 20,
  },
  balance: {
    fontWeight: '400',
    fontSize: 28,
    color: COLORS.orange,
    flex: 1,
  },
  cardNo: {
    fontSize: 18,
    fontWeight: '500',

    color: COLORS.primaryGray,
  },
});
