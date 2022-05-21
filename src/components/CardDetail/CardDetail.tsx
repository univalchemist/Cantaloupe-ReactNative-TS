import {StyleSheet, View} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface CardDetailProps {
  amount?: string;
  CardImg?: any;
  cardNumber?: string;
  name?: string;
  street?: string;
  city?: string;
}

export const CardDetail = ({
  amount,
  CardImg,
  cardNumber,
  name,
  street,
  city,
}: CardDetailProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Typography style={styles.totalTxt}>Total </Typography>
        <Typography style={styles.amountTxt}>${amount}</Typography>
      </View>

      <View style={styles.separator} />

      <Typography style={styles.totalTxt}>Pay With </Typography>
      <View style={styles.cardImgContainer}>
        {CardImg}
        <View style={styles.cashBackCont}>
          <Typography style={styles.cashBack}>Cash Back Mastercard</Typography>
          <Typography style={[styles.cashBack, {color: COLORS.gray1}]}>
            {cardNumber}
          </Typography>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.addressContainer}>
        <Typography style={[styles.address, {fontWeight: '500'}]}>
          Address
        </Typography>
        <View>
          <Typography style={styles.address}>{name}</Typography>
          <Typography style={styles.address}>{street}</Typography>
          <Typography style={styles.address}>{city}</Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: hp('0.05%'),
    borderColor: COLORS.primaryGray,
    borderRadius: hp('0.5%'),
    padding: hp('2%'),
    marginTop: hp('2.4%'),
  },
  totalContainer: {
    width: wp('80%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalTxt: {
    fontWeight: '600',
    fontSize: hp('1.8%'),
    color: COLORS.black,
  },
  amountTxt: {
    fontSize: hp('1.8%'),
    color: COLORS.black,
  },
  separator: {
    backgroundColor: COLORS.gray1,
    width: wp('70%'),
    alignSelf: 'center',
    marginVertical: hp('1.4%'),
    padding: hp('0.038%'),
  },
  cardImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.6%'),
    width: wp('80%'),
  },
  cashBackCont: {
    marginLeft: wp('5%'),
  },
  cashBack: {
    fontSize: hp('2.1%'),
    color: COLORS.black,
  },
  addressContainer: {
    flexDirection: 'row',
    width: wp('80%'),
  },
  address: {
    fontSize: hp('2.1%'),
    color: COLORS.black,
    marginRight: 20,
  },
});
