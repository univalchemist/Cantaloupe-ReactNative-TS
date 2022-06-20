import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {ReactElement} from 'react';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

interface ConfirmCardDetailProps {
  CardLogo?: ReactElement;
  cardName?: string;
  onPressCard?: () => void;
  InfoIcon?: ReactElement;
  style?: ViewStyle | ViewStyle[];
  balance?: string | boolean;
  cardStyle?: ViewStyle;
  cardNumber?: string;
  onPressAddress?: () => void;
}

export const ConfirmCardDetail = ({
  CardLogo,
  cardName,
  cardNumber,
  style,
  onPressCard,
  InfoIcon,
  cardStyle,
  onPressAddress,
}: ConfirmCardDetailProps) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.estimatedTotal}>Estimated Total</Typography>
      <Typography style={styles.balanceFalls}>
        Reload $50 when Balance Falls Below $5
      </Typography>
      <View style={styles.separator} />
      <TouchableOpacity onPress={onPressCard}>
        <Typography style={styles.estimatedTotal}>Pay with</Typography>
        <View style={[styles.CardTypeContainer, style]}>
          <View style={cardStyle}>{CardLogo}</View>
          <View style={styles.cardInfoContainer}>
            <Typography style={styles.cardName}>{cardName}</Typography>
            <View style={styles.emptyCardContainer}>
              <Typography style={styles.cardNumber}>{cardNumber}</Typography>
              {InfoIcon}
            </View>
          </View>
          <View style={styles.rightTitle}>
            <RightArrow width={wp('4%')} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={onPressAddress}>
        <Typography style={styles.estimatedTotal}>Address</Typography>
        <View style={[styles.CardTypeContainer, style]}>
          <View style={styles.cardInfoContainer}>
            <Typography style={styles.Address}>J•• Bil•••a</Typography>
            <Typography style={styles.Address}>1•• S••</Typography>
            <Typography style={styles.Address}>New York, NY 1001</Typography>
          </View>
          <View style={styles.rightTitle}>
            <RightArrow width={wp('4%')} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
    borderColor: COLORS.primaryGray,
    borderWidth: 0.2,
  },
  CardTypeContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  cardInfoContainer: {
    flex: 1,
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  cardName: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.black,
    marginLeft: wp('1.7%'),
  },
  Address: {
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.primaryGray,
  },
  cardNumber: {
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.primaryGray,
    marginLeft: wp('1.7%'),
    marginTop: 2,
    marginRight: wp('1.9%'),
  },
  emptyCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estimatedTotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: hp('1%'),
  },
  balanceFalls: {
    fontSize: 14,
    color: COLORS.primaryGray,
  },
  separator: {
    width: '110%',
    height: 0.7,
    backgroundColor: COLORS.grayLight,
    marginVertical: hp('2%'),
    alignSelf: 'center',
  },
});
