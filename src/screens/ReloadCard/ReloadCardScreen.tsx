import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ReloadCardScreenProp} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {VisaIcon, CardSymbolIcon} from '@assets/icon';
import {ReloadCardImage} from '@components/ReloadCardImage';
import {Typography} from '@components/Typography';
import {CardAmountDropDown, Separator} from '@components/index';
import {PaymentMethodCard} from '@components/PaymentMethodCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CantaloupeMoreCardType} from '@models/enums/CantaloupeMoreCardType';

const ReloadCardScreen = ({}: ReloadCardScreenProp) => {
  const navigation = useNavigation<ReloadCardScreenProp>();
  const [items, setItems] = useState([
    {label: '$50', value: '50'},
    {label: '$100', value: '100'},
    {label: '$200', value: '200'},
  ]);

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper scrollable={false} thirdColor={COLORS.white}>
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />
        <View style={styles.subContainer}>
          <Typography style={styles.screenTitle}>Reload Card</Typography>
          <ReloadCardImage
            CardLogo={
              <CardImage
                cardType={CantaloupeMoreCardType.PREPAID_CARD}
                width={100}
              />
            }
            cardNumber="More Card •• 5743"
            balance="50.00"
          />
          <Typography style={styles.reloadWithTxt}>Reload With:</Typography>
          <CardAmountDropDown
            onPress={() => {}}
            items={items}
            setItems={setItems}
          />
          <Typography style={styles.reloadWithTxt}>Payment Method:</Typography>

          <PaymentMethodCard
            CardTypeIcon={<VisaIcon width={wp('13%')} />}
            CardIcon={<CardSymbolIcon width={wp('11%')} />}
            phoneNumber="+1 (•••) •••-•567"
            onPressContinueTxt={() => {}}
            onPressContinueBtn={() => {
              navigation.navigate('ReloadCard2');
            }}
          />
        </View>
        <Separator />
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    paddingHorizontal: wp('5%'),
    marginBottom: hp('3%'),
  },

  screenTitle: {
    fontSize: hp('3.8%'),
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginVertical: hp('2.3%'),
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: hp('0.7%'),
    color: COLORS.white,
    position: 'absolute',
    top: hp('-1'),
    right: wp('-0.5'),
    backgroundColor: COLORS.blue,
    padding: hp('0.4%'),
    borderRadius: hp('0.6%'),
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  reloadWithTxt: {
    fontFamily: 'Rubik',
    color: COLORS.black,
    fontWeight: '300',
    fontSize: hp('2.3%'),
    marginTop: hp('2.3%'),
    marginBottom: hp('1.6%'),

    fontStyle: 'normal',
  },
  separatorCont: {
    position: 'absolute',
    bottom: hp('4.7%'),
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: hp('0.3%'),
    width: wp('85%'),
    alignSelf: 'center',
  },
});
export default ReloadCardScreen;
