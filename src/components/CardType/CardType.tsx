import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography, CardImage} from '@components/index';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

import {PaymentMethod} from '@models/PaymentMethod';

interface CardTypeProps {
  card: PaymentMethod;
  shouldShowLogo?: boolean;
  cardNumber?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const CardType = ({
  card,
  shouldShowLogo = true,
  style,
  onPress,
}: CardTypeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardTypeContainer, style]}>
      <View style={styles.cardInfoContainer}>
        {shouldShowLogo && <CardImage cardType={card.cardType} width={100} />}
        <View style={styles.emptyCardContainer}>
          <Typography style={styles.balance}>${card.balance}</Typography>

          <Typography style={styles.cardNumber}>{card.cardNum}</Typography>
        </View>
      </View>

      <RightArrow width={44} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  balance: {
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.orange,
    marginLeft: 5,
  },
  cardNumber: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.primaryGray,
    marginLeft: 5,
    marginTop: 2,
    marginRight: 5,
  },
  emptyCardContainer: {
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
});
