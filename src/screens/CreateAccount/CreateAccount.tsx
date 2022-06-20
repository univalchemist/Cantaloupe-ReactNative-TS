import React, {useState, useEffect, useCallback} from 'react';
import {
  Button,
  FloatLabelTextField,
  GradientScrollingWrapper,
  GoBackHeader,
  Typography,
} from '@components/index';
import {StyleSheet, View} from 'react-native';
import {CreateAccountScreenProp} from '@navigation/MainNavigator';
import {COLORS} from '@theme/color';
import CheckBox from 'react-native-check-box';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//  Detect User
import {
  getIsExistingUser,
  DetectExistingUserResponse,
} from '@apollo-endpoints/index';

const CreateAccount = ({route, navigation}: CreateAccountScreenProp) => {
  const email = String(route && route.params) ?? '';
  const [checked, setChecked] = useState(false);
  const [isExistingUserResponse, setIsExistingUserResponse] =
    useState<DetectExistingUserResponse>();
  const [shouldShowExistingUserText, setShouldShowExistingUserText] =
    useState<boolean>();

  useEffect(() => {
    if (isExistingUserResponse) {
      setShouldShowExistingUserText(isExistingUserResponse?.isExistingUser);
    }
  }, [isExistingUserResponse]);

  const detectIsExistingUser = useCallback(async (text: string) => {
    await getIsExistingUser({email: text}).then(
      (response: DetectExistingUserResponse) => {
        setIsExistingUserResponse(response);
      },
    );
  }, []);

  const backPressed = () => {
    navigation.pop();
  };

  //const handleContinueWithEmail = useCallback(() => {}, []);
  // const handleBackHome = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={styles.container}>
      <GradientScrollingWrapper>
        <GoBackHeader
          headerState="addCard"
          label="BACK"
          onPress={() => backPressed()}
        />
        <KeyboardAwareScrollView>
          <View style={styles.innerContainer}>
            <View style={styles.titleContainer}>
              <Typography style={styles.title}>Create Account</Typography>
            </View>
            <FloatLabelTextField
              title="Email"
              titleStyle={styles.inputTitle}
              isValidated={shouldShowExistingUserText}
              validate={text => {
                detectIsExistingUser(text);
              }}
              initialValue={email}
              shouldPreventEdit={email && email.length > 0 ? true : false}
            />
            {shouldShowExistingUserText && (
              <Typography style={styles.label_orange}>
                A user with this email exists
              </Typography>
            )}
            <View style={styles.subtitleContainer}>
              <Typography style={styles.subtitle}>
                Enter personal details
              </Typography>
            </View>
            <FloatLabelTextField
              title="First Name *"
              titleStyle={styles.inputTitle}
            />
            <FloatLabelTextField
              title="Last Name *"
              titleStyle={styles.inputTitle}
            />
            <FloatLabelTextField
              title="Street Address"
              titleStyle={styles.inputTitle}
            />
            <FloatLabelTextField
              title="Zip / Postal Code *"
              titleStyle={styles.inputTitle}
            />
            <View style={styles.checkbox_view}>
              <CheckBox
                onClick={() => setChecked(!checked)}
                isChecked={checked}
              />
              <View>
                <Typography style={styles.label}>
                  I have read and agree to Cantaloupes's:
                </Typography>
                <Typography style={styles.label_orange}>
                  Terms of Use
                </Typography>
                <Typography style={styles.label_orange}>
                  Privacy Policy
                </Typography>
              </View>
            </View>

            <View style={styles.overlayBtnCont}>
              <Button
                onPress={() => navigation.navigate('Dashboard')}
                title="Complete"
                style={styles.completeBtn}
              />
              <Button
                title="Back Home"
                onPress={() => navigation.navigate('Welcome')}
                style={styles.btnBack}
                titleStyle={styles.btnBackTitle}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </GradientScrollingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  titleContainer: {marginBottom: 15},
  title: {
    fontWeight: '300',
    fontSize: 40,
    lineHeight: 48,
    color: COLORS.secondaryGray,
    textAlign: 'center',
  },
  subtitleContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '400',
  },

  btnBackTitle: {
    color: COLORS.primaryGray,
  },
  inputTitle: {
    color: COLORS.primaryGray,
    fontSize: hp('1.9%'),
    fontWeight: '500',
  },
  input: {},
  label: {
    fontSize: hp('1.9%'),
  },
  label_orange: {
    color: COLORS.orange,
    fontSize: hp('2.15%'),
    paddingTop: hp('0.7%'),
  },
  checkbox_view: {
    width: wp('100%') - 20,
    paddingLeft: wp('2.3%'),
    fontWeight: '700',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  overlayBtnCont: {
    width: wp('90%'),
    height: hp('17%'),
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginBottom: hp('10%'),
    marginTop: hp('2.3%'),

    shadowColor: COLORS.black,
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  completeBtn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp('1.4%'),
    minHeight: hp('7%'),
  },
  btnBack: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp('1.4%'),
    minHeight: hp('7%'),
    backgroundColor: COLORS.transparent,
  },
});

export default CreateAccount;
