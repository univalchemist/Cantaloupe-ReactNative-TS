import React from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {CardRightArrow} from '@assets/icon';
import {Button} from '../Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface PaymentMethodProps {
  CardTypeIcon?: any;
  CardIcon?: any;
  phoneNumber?: string;
  onPressContinueTxt?: any;
  onPressContinueBtn?: any;
}

export const PaymentMethodCard = ({
  onPressContinueTxt,
  CardTypeIcon,
  CardIcon,
  phoneNumber,
  onPressContinueBtn,
}: PaymentMethodProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.payProfileCont}>
        <View>
          <Typography style={styles.looksLike}>Looks Like You Have </Typography>
          <Typography style={styles.looksLike}>
            A Click To Pay Profile
          </Typography>
        </View>
        <CardRightArrow width={wp('10%')} />
        <View>
          {CardTypeIcon}
          {CardIcon}
        </View>
      </View>
      <Typography style={[styles.codeText, {marginTop: hp('0.5%')}]}>
        Enter The Code Mastercard Sent
      </Typography>
      <Typography style={[styles.codeText, {marginBottom: hp('1.5%')}]}>
        To {phoneNumber}
      </Typography>
      <TextInput
        style={styles.codeInput}
        placeholder="-   -   -   -   -   -"
        placeholderTextColor={COLORS.black}
      />
      <TouchableOpacity onPress={onPressContinueTxt}>
        <Typography style={[styles.continueTxt]}>
          Continue Another Way
        </Typography>
      </TouchableOpacity>
      <Button
        onPress={onPressContinueBtn}
        title="Continue"
        style={styles.contiueBtn}
        titleStyle={styles.contineBtnTxt}
        leftIcon={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    alignSelf: 'center',
    height: hp('34%'),
    borderWidth: hp('0.05%'),
    borderColor: COLORS.primaryGray,
    borderRadius: hp('0.5%'),
    padding: hp('2%'),
  },
  payProfileCont: {
    width: wp('80%'),
    height: hp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  looksLike: {
    fontWeight: 'bold',
    fontSize: hp('2.1%'),
    color: COLORS.black,
    letterSpacing: 0.2,
  },
  codeText: {
    fontSize: 16,
    color: COLORS.black,
  },
  codeInput: {
    width: wp('80%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: hp('3%'),
  },
  continueTxt: {
    fontSize: hp('1.7%'),
    textDecorationLine: 'underline',
    color: COLORS.darkGray,
    marginVertical: hp('1.8%'),
  },
  contiueBtn: {
    width: wp('80%'),
    alignSelf: 'center',
    minHeight: hp('6%'),
    backgroundColor: COLORS.black,
  },
  contineBtnTxt: {
    width: wp('80%'),
    alignSelf: 'center',
    fontSize: hp('2.15%'),
  },
});
