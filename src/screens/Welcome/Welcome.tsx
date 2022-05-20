import {Button} from '@components/Button';
import {CardImage, LogoMore} from '@assets/icon';
import {Carousel} from '@components/Carousel';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WelcomeScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CarouselData = [
  {
    icon: <CardImage height={hp('50%')} width={wp('100%')} />,
    title: 'Reload your pass with a credit or debit card',
  },
  {
    icon: <CardImage height={hp('50%')} width={wp('100%')} />,
    title: 'We Assign a Professional',
  },
  {
    icon: <CardImage height={hp('50%')} width={wp('100%')} />,
    title: 'We Repair',
  },
  {
    icon: <CardImage height={hp('50%')} width={wp('100%')} />,
    title: 'We Serve',
  },
  {
    icon: <CardImage height={hp('50%')} width={wp('100%')} />,
    title: 'We Do',
  },
];

const Welcome = ({}: WelcomeScreenProp) => {
  const navigation = useNavigation<WelcomeScreenProp>();

  return (
    <GradientScrollingWrapper style={styles.container}>
      <View style={styles.logo}>
        <LogoMore />
      </View>
      <Carousel data={CarouselData} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('AuthOption')}
        style={styles.btnCreate}
      />
      <Button
        title="Already Have An Account?"
        onPress={() => {}}
        style={styles.btnHave}
        titleStyle={styles.btnHaveTitle}
      />
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('6%'),
  },
  logo: {
    alignSelf: 'center',
  },
  btnCreate: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  btnHave: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
  },
  btnHaveTitle: {
    color: COLORS.primaryGray,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default Welcome;
