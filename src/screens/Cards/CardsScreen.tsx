import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {CardsScreenProp} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';

import {CardImage1, CardLogo, EmptyCardLogo, InfoIcon} from '@assets/icon';
import {
  Typography,
  CardImage,
  Header,
  CardType,
  GradientScrollingWrapper,
  Separator,
} from '@components/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PaymentMethod} from '@models/PaymentMethod';
import {CantaloupeMoreCardType} from '@models/enums/CantaloupeMoreCardType';

const CardsScreen = ({}: CardsScreenProp) => {
  const navigation = useNavigation<CardsScreenProp>();

  //  Begin test data
  const CARD_TYPE: CantaloupeMoreCardType =
    CantaloupeMoreCardType.PAYROLL_DEDUCT_CARD;
  const card: PaymentMethod = {
    promoTotal: 0,
    replenishTotal: 0,
    discount: 0,
    points: 0,
    cardType: CARD_TYPE,
    cardId: 100001,
    cardNum: '',
    balance: 0,
    currencyCd: '',
    primary: true,
  };
  //  End test data

  const handleCardButtonPressed = () => {
    //  handle pressed
  };

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />
        <CardImage
          containerStyle={styles.cardImagContainer}
          cardTypeText={
            <Typography style={styles.primaryTxt}>PRIMARY</Typography>
          }
          CardImg={
            <CardImage1
              width={wp('80%%')}
              height={hp('25%')}
              style={styles.cardImage1BG}
              preserveAspectRatio="xMinYMin slice"
            />
          }
        />
        <CardType
          style={styles.cardTypeStyle}
          balance="$50"
          cardNumber="More card •• 5743"
          onPress={() => navigation.navigate('CardDetail', {card})}
        />
        <Separator />
        <CardType
          style={styles.cardTypeStyle1}
          CardLogo={<CardLogo width={wp('25.5%')} />}
          balance="$0"
          cardNumber="More card •• 9898"
          onPress={() => handleCardButtonPressed()}
          InfoIcon={null}
        />

        <CardType
          style={styles.cardTypeStyle1}
          CardLogo={<EmptyCardLogo width={wp('25.5%')} />}
          cardNumber="Add CPay Card"
          onPress={() => handleCardButtonPressed()}
          InfoIcon={<InfoIcon width={wp('3.8%')} />}
        />
        <Separator />
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  primaryTxt: {
    fontWeight: '500',
    fontSize: hp('2%'),
    color: COLORS.white,
    position: 'absolute',
    top: hp('-2%'),
    right: wp('7.5%'),
    backgroundColor: COLORS.blue,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.8%'),
    borderRadius: 13,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  cardImagContainer: {
    marginTop: hp('3%'),
  },
  cardImage1BG: {backgroundColor: COLORS.blueDark},
  cardTypeStyle: {marginTop: hp('4.8%'), width: wp('75%')},
  cardTypeStyle1: {marginTop: hp('4.8%'), width: wp('88%')},
});
export default CardsScreen;
