import {StyleSheet, View} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

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
    borderWidth: 0.2,
    borderColor: COLORS.primaryGray,
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
  },
  totalContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black,
  },
  amountTxt: {
    fontSize: 18,
    color: COLORS.black,
  },
  separator: {
    backgroundColor: COLORS.gray1,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 0.2,
  },
  cardImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  cashBackCont: {
    marginLeft: 20,
  },
  cashBack: {
    fontSize: 18,
    color: COLORS.black,
  },
  addressContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  address: {
    fontSize: 18,
    color: COLORS.black,
    marginRight: 20,
  },
});
