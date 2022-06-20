import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CryptoCardLogo,
  PrepaidCardLogo,
  PayrollDeductCardLogo,
} from '@assets/icon';
import {CantaloupeMoreCardType} from '@models/enums/CantaloupeMoreCardType';

interface CardImageProps {
  cardType?: CantaloupeMoreCardType;
  width: number;
  height?: number;
}

export const CardImage = ({cardType, width}: CardImageProps) => {
  const cardToDisplay = () => {
    const height = Math.round(width * 0.67);
    switch (cardType) {
      case 'PREPAID CARD':
        return <PrepaidCardLogo width={width} height={height} />;
      case 'PAYROLL DEDUCT CARD':
        return <PayrollDeductCardLogo width={width} height={height} />;
      case 'CRYPTO CARD':
        return <CryptoCardLogo width={width} height={height} />;
      default:
        return <PrepaidCardLogo width={width} height={height} />;
    }
  };
  return (
    <View style={[styles.cardImgContainer]}>
      <View style={styles.card}>{cardToDisplay()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {width: '100%'},
});
