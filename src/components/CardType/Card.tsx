import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

interface CardTypeProps {
  CardLogo?: ReactElement;
  cardNumber?: string;
  onPress?: () => void;
  InfoIcon?: ReactElement;
  style?: ViewStyle | ViewStyle[];
  balance?: string | boolean;
  cardStyle?: ViewStyle;
  hideRightArrow?: boolean;
}

export const Card = ({
  CardLogo,
  balance,
  cardNumber,
  style,
  onPress,
  InfoIcon,
  cardStyle,
  hideRightArrow,
}: CardTypeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.CardTypeContainer, style]}>
      <View style={cardStyle}>{CardLogo}</View>
      <View style={styles.cardInfoContainer}>
        {balance && <Typography style={styles.balance}>{balance}</Typography>}
        <View style={styles.emptyCardContainer}>
          <Typography style={styles.cardNumber}>{cardNumber}</Typography>
          {InfoIcon}
        </View>
      </View>
      {!hideRightArrow && (
        <View style={styles.rightTitle}>
          <RightArrow width={wp('4%')} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  cardInfoContainer: {
    marginLeft: wp('1.8%'),
    flex: 1,
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  balance: {
    fontWeight: '500',
    fontSize: hp('3.3%'),
    color: COLORS.orange,
    marginLeft: wp('1.7%'),
  },
  cardNumber: {
    fontWeight: '600',
    fontSize: hp('1.9%'),
    color: COLORS.primaryGray,
    marginLeft: wp('1.7%'),
    marginTop: 2,
    marginRight: wp('1.9%'),
  },
  emptyCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
