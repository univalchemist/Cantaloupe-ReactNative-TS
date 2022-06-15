import React from 'react';
import {Button} from '@components/Button';
import {
  AppleWalletSlide,
  CardImageSlide,
  CryptoCardSlide,
  LogoMore,
  TransactionSlide,
  TwoPercentSlide,
} from '@assets/icon';
import {Carousel} from '@components/Carousel';
import {StyleSheet, View, Dimensions} from 'react-native';
import {WelcomeScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';

const width = Dimensions.get('window').width;

const CarouselData = [
  {
    icon: <CardImageSlide height={width * 0.67} width={width} />,
    title: 'Reload your pass with a credit or debit card',
  },
  {
    icon: <AppleWalletSlide height={width * 0.67} width={width} />,
    title: 'Your More Pass Works \nwith Apple Wallet',
  },
  {
    icon: <CryptoCardSlide height={width * 0.67} width={width} />,
    title: 'Add a CPay pass to pay with digital tokens',
  },
  {
    icon: <TwoPercentSlide height={width * 0.67} width={width} />,
    title: 'Get 2% back on all CPay transactions',
  },
  {
    icon: <TransactionSlide height={width * 0.67} width={width} />,
    title: 'View your transactions, get help, and more ',
  },
];

const Welcome = ({}: WelcomeScreenProp) => {
  const navigation = useNavigation<WelcomeScreenProp>();

  const buttonTitle = 'Already Have An Account?';

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <LogoMore width={170} />
          </View>
          <Carousel data={CarouselData} />
          <Button
            title="Create Account"
            onPress={() => navigation.navigate('AuthOption')}
            style={styles.btnCreate}
          />

          <Button
            title={buttonTitle}
            onPress={() => navigation.navigate('Login')}
            style={styles.btnHave}
            titleStyle={styles.btnHaveTitle}
          />
        </View>
      </GradientScrollingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {marginTop: 10},
  logoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCreate: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  btnHave: {
    marginHorizontal: 20,
    backgroundColor: COLORS.transparent,
  },
  btnHaveTitle: {
    color: COLORS.primaryGray,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default Welcome;
