import React, {useCallback} from 'react';
// import {AppleButton} from '@invertase/react-native-apple-authentication';
import {Button, SocialButton} from '@components/Button';
import {Google, Facebook, Apple} from '@assets/icon';
import {StyleSheet, View} from 'react-native';
import {AuthOptionScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {Typography} from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';

const AuthOption = () => {
  const navigation = useNavigation<AuthOptionScreenProp>();

  const handleContinueWithEmail = useCallback(() => {
    navigation.navigate('Signin');
  }, [navigation]);

  const handleBackHome = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <GradientScrollingWrapper style={styles.container} scrollable={false}>
      <Typography style={styles.title}>Create Account</Typography>
      {/* Apple button needs to be passed by apple */}
      {/* <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.CONTINUE}
        style={{
          width: 345,
          height: 64,
        }}
        onPress={() => {}}
      /> */}
      <SocialButton
        title="Continue with Apple"
        icon={<Apple width={24} />}
        onPress={() => {}}
      />
      <SocialButton
        title="Continue with Google"
        icon={<Google width={24} />}
        onPress={() => {}}
      />
      <SocialButton
        title="Continue with Facebook"
        icon={<Facebook width={24} />}
        onPress={() => {}}
      />
      <View style={styles.continueContainer}>
        <Typography style={styles.continue}>
          You can also{' '}
          <Typography onPress={handleContinueWithEmail} style={styles.email}>
            continue with email
          </Typography>
          .
        </Typography>
      </View>
      {/* <Button
        title="Back Home"
        onPress={handleBackHome}
        style={styles.btnBack}
        titleStyle={styles.btnBackTitle}
      /> */}
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 180,
    alignItems: 'center',
  },
  title: {
    fontWeight: '300',
    fontSize: 40,
    color: COLORS.secondaryGray,
    marginBottom: 30,
  },
  continueContainer: {
    marginTop: 10,
  },
  continue: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.primaryGray,
  },
  email: {
    color: COLORS.orange,
    textDecorationLine: 'underline',
  },

  btnBack: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    minHeight: 60,
    position: 'absolute',
    bottom: 15,
    backgroundColor: 'transparent',
  },
  btnBackTitle: {
    color: COLORS.primaryGray,
  },
});
export default AuthOption;
