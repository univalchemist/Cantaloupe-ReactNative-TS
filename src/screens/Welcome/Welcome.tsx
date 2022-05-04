import {Button} from '@components/Button';
import {CardImage, LogoMore} from '@assets/icon';
import {Carousel} from '@components/Carousel';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WelcomeScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientWrapper} from '@components/GradientWrpper';

const CarouselData = [
  {
    icon: <CardImage />,
    title: 'Reload your pass with a credit or debit card',
  },
  {
    icon: <CardImage />,
    title: 'We Assign a Professional',
  },
  {
    icon: <CardImage />,
    title: 'We Repair',
  },
  {
    icon: <CardImage />,
    title: 'We Serve',
  },
  {
    icon: <CardImage />,
    title: 'We Do',
  },
];

const Welcome = ({}: WelcomeScreenProp) => {
  const navigation = useNavigation<WelcomeScreenProp>();

  return (
    <GradientWrapper style={styles.container} scrollable>
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
    </GradientWrapper>
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
