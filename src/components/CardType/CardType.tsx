import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

interface CardTypeProps {
  CardLogo: any;
  balance?: string;
  cardNumber: string;
  onPressRight: () => void;
  style?: ViewStyle;
  InfoIcon: any;
}

export const CardType = ({
  CardLogo,
  balance,
  cardNumber,
  style,
  onPressRight,
  InfoIcon,
}: CardTypeProps) => {
  return (
    <View style={[styles.CardTypeContainer, style]}>
      {CardLogo}
      <View style={styles.cardInfoContainer}>
        {balance && <Typography style={styles.balance}>{balance}</Typography>}
        <View style={styles.emptyCardContainer}>
          <Typography style={styles.cardNumber}>{cardNumber}</Typography>
          {InfoIcon}
        </View>
      </View>
      <TouchableOpacity onPress={onPressRight} style={styles.rightTitle}>
        <RightArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  cardInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontWeight: '500',
    fontSize: 28,
    color: COLORS.orange,
    marginLeft: 7,
  },
  cardNumber: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.primaryGray,
    marginLeft: 7,
    marginTop: 2,
    marginRight: 8,
  },
  emptyCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
