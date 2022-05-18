import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ReloadCardScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {CardImage2, VisaIcon, CardSymbolIcon} from '@assets/icon';
import {ReloadCardImage} from '@components/ReloadCardImage';
import {Typography} from '@components/Typography';
import {CardAmountDropDown} from '@components/CardAmountDropDown/CardAmountDropDown';
import {PaymentMethodCard} from '@components/PaymentMethodCard';

const ReloadCardScreen = ({}: ReloadCardScreenProp) => {
  const navigation = useNavigation<ReloadCardScreenProp>();
  const [items, setItems] = useState([
    {label: '$50', value: '50'},
    {label: '$100', value: '100'},
    {label: '$200', value: '200'},
  ]);

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor="#fff">
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />
        <View style={styles.subContainer}>
          <Typography style={styles.screenTitle}>Reload Card</Typography>
          <ReloadCardImage
            CardLogo={
              <CardImage
                cardTypeText={
                  <Typography style={styles.primaryTxt}>PRIMARY</Typography>
                }
                CardImg={<CardImage2 style={{backgroundColor: '#004890'}} />}
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
            CardTypeIcon={<VisaIcon />}
            CardIcon={<CardSymbolIcon />}
            phoneNumber="+1 (•••) •••-•567"
            onPressContinueTxt={() => {}}
            onPressContinueBtn={() => {
              navigation.navigate('ReloadCard2');
            }}
          />
        </View>
      </GradientScrollingWrapper>
      <View style={styles.separatorCont}>
        <View style={[styles.separator]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    paddingHorizontal: 20,
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginVertical: 20,
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: 6,
    color: COLORS.white,
    marginLeft: 7,
    position: 'absolute',
    top: -6,
    right: -2,
    backgroundColor: COLORS.blue,
    padding: 3,
    borderRadius: 5,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  reloadWithTxt: {
    fontFamily: 'Rubik',
    color: COLORS.black,
    fontWeight: '300',
    fontSize: 20,
    marginVertical: 20,
    fontStyle: 'normal',
  },
  separatorCont: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
  },
});
export default ReloadCardScreen;
