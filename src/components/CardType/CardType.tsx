import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

interface CardTypeProps {
  CardLogo: any;
  cardNumber: string;
  onPress: () => void;
  InfoIcon: any;
  style?: ViewStyle;
  balance?: string;
}

export const CardType = ({
  CardLogo,
  balance,
  cardNumber,
  style,
  onPress,
  InfoIcon,
}: CardTypeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.CardTypeContainer, style]}>
      {CardLogo}
      <View style={styles.cardInfoContainer}>
        {balance && <Typography style={styles.balance}>{balance}</Typography>}
        <View style={styles.emptyCardContainer}>
          <Typography style={styles.cardNumber}>{cardNumber}</Typography>
          {InfoIcon}
        </View>
      </View>
      <View style={styles.rightTitle}>
        <RightArrow />
      </View>
    </TouchableOpacity>
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
