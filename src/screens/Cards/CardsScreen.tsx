import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {CardsScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {CardImage1, CardLogo, EmptyCardLogo, InfoIcon} from '@assets/icon';
import {CardType} from '@components/CardType';

const CardsScreen = ({}: CardsScreenProp) => {
  const navigation = useNavigation<CardsScreenProp>();

  return (
    <GradientScrollingWrapper thirdColor="#fff">
      <Header onPressRight={() => Alert.alert('Go to profile screen')} />
      <CardImage
        CardImg={<CardImage1 style={{backgroundColor: '#004890'}} />}
      />
      <CardType
        style={{marginTop: 40, width: '75%'}}
        balance="$50"
        cardNumber="More card •• 5743"
        onPressRight={() => {}}
        CardLogo={null}
        InfoIcon={null}
      />
      <View style={styles.separator} />
      <CardType
        style={{marginTop: 40, width: '88%'}}
        CardLogo={<CardLogo />}
        balance="$0"
        cardNumber="More card •• 9898"
        onPressRight={() => {}}
        InfoIcon={null}
      />
      <CardType
        style={{marginTop: 40, width: '88%'}}
        CardLogo={<EmptyCardLogo />}
        cardNumber="Add CPay Card"
        onPressRight={() => {}}
        InfoIcon={<InfoIcon />}
      />
      <View style={[styles.separator, {marginTop: 130}]} />
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 40,
    color: COLORS.secondaryGray,
    alignSelf: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '400',
    alignSelf: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btnCreate: {
    marginLeft: 15,
    bottom: 0,
    position: 'absolute',
    width: '92%',
    height: 50,
  },
  paragraph: {
    fontSize: 16,
    padding: 25,
    textAlign: 'center',
    color: COLORS.primaryGray,
  },
  paragraph_view: {},
  email: {
    color: COLORS.orange,
  },
  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
    alignSelf: 'center',
    marginVertical: 25,
  },
});
export default CardsScreen;
