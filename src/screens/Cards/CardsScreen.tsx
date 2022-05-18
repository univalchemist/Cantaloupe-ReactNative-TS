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
import {Typography} from '@components/Typography';

const CardsScreen = ({}: CardsScreenProp) => {
  const navigation = useNavigation<CardsScreenProp>();

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor="#fff">
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />
        <CardImage
          containerStyle={{marginTop: 10}}
          cardTypeText={
            <Typography style={styles.primaryTxt}>PRIMARY</Typography>
          }
          CardImg={<CardImage1 style={{backgroundColor: '#004890'}} />}
        />
        <CardType
          style={{marginTop: 40, width: '75%'}}
          balance="$50"
          cardNumber="More card •• 5743"
          onPress={() => navigation.navigate('CardDetail')}
          CardLogo={null}
          InfoIcon={null}
        />
        <View style={styles.separator} />
        <CardType
          style={{marginTop: 40, width: '88%'}}
          CardLogo={<CardLogo />}
          balance="$0"
          cardNumber="More card •• 9898"
          onPress={() => {}}
          InfoIcon={null}
        />
        <CardType
          style={{marginTop: 40, width: '88%'}}
          CardLogo={<EmptyCardLogo />}
          cardNumber="Add CPay Card"
          onPress={() => {}}
          InfoIcon={<InfoIcon />}
        />
      </GradientScrollingWrapper>
      <View style={styles.separatorCont1}>
        <View style={[styles.separator1]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  separatorCont: {
    position: 'absolute',
    bottom: '7%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
    alignSelf: 'center',
    marginVertical: 25,
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 7,
    position: 'absolute',
    top: -2,
    right: 45,
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  separatorCont1: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator1: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
  },
});
export default CardsScreen;
