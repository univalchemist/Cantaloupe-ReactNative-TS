import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {CardRightArrow} from '@assets/icon';

import {Button} from '../Button';

interface PaymentMethodProps {
  CardTypeIcon: any;
  CardIcon: any;
  phoneNumber: string;
  onPressContinueTxt: any;
  onPressContinueBtn: any;
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
        <CardRightArrow />
        <View>
          {CardTypeIcon}
          {CardIcon}
        </View>
      </View>
      <Typography style={[styles.codeText, {marginTop: 8}]}>
        Enter The Code Mastercard Sent
      </Typography>
      <Typography style={[styles.codeText, {marginBottom: 20}]}>
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
    width: '100%',
    alignSelf: 'center',
    height: '48%',
    borderWidth: 0.2,
    borderColor: COLORS.primaryGray,
    borderRadius: 5,
    padding: 15,
  },
  payProfileCont: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  looksLike: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.black,
  },
  cardInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  codeText: {
    fontSize: 16,
    color: COLORS.black,
  },
  codeInput: {
    width: '100%',
    height: '20%',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 24,
  },
  continueTxt: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: COLORS.darkGray,
    marginVertical: 15,
  },
  contiueBtn: {
    width: '100%',
    alignSelf: 'center',
    minHeight: 50,
    backgroundColor: COLORS.black,
  },
  contineBtnTxt: {
    width: '90%',
    alignSelf: 'center',
    fontSize: 18,
  },
});
