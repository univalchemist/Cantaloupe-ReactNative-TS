import React, {useState, useEffect, useCallback} from 'react';
import {Button} from '@components/Button';
import {StyleSheet, View} from 'react-native';
import {SigninScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {Typography} from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {FloatLabelTextField} from '@components/FloatLabelTextField';
import CheckBox from 'react-native-check-box';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//  Detect User
import {
  getIsExistingUser,
  DetectExistingUserResponseParams,
} from '@queries/detectExistingUser';

const SignIn = () => {
  const navigation = useNavigation<SigninScreenProp>();
  const [checked, setChecked] = useState(false);
  const [isExistingUserResponse, setIsExistingUserResponse] =
    useState<DetectExistingUserResponseParams>();
  const [shouldShowExistingUserText, setShouldShowExistingUserText] =
    useState<boolean>();

  useEffect(() => {
    if (
      isExistingUserResponse &&
      isExistingUserResponse?.isExistingUser === true
    ) {
      setShouldShowExistingUserText(true);
    }
  }, [isExistingUserResponse]);

  const detectIsExistingUser = useCallback(async (text: String) => {
    await getIsExistingUser({email: text}).then(response => {
      console.log(response);
      setIsExistingUserResponse(response);
    });
  }, []);

  //const handleContinueWithEmail = useCallback(() => {}, []);
  // const handleBackHome = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <GradientScrollingWrapper>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Typography style={styles.title}>Create Account</Typography>
          <FloatLabelTextField
            title="Email"
            viewStyle={styles.input}
            titleStyle={styles.inputTitle}
            isValidated={
              !!!shouldShowExistingUserText
                ? shouldShowExistingUserText
                : shouldShowExistingUserText
            }
            validate={text => {
              detectIsExistingUser(text);
            }}
          />
          {!!!shouldShowExistingUserText && shouldShowExistingUserText && (
            <Typography style={styles.label_orange}>
              A user with this email exists
            </Typography>
          )}
          <Typography style={styles.subtitle}>
            Enter personal details
          </Typography>

          <FloatLabelTextField
            title="First Name *"
            viewStyle={styles.input}
            titleStyle={styles.inputTitle}
          />
          <FloatLabelTextField
            title="Last Name *"
            viewStyle={styles.input}
            titleStyle={styles.inputTitle}
          />
          <FloatLabelTextField
            title="Street Address"
            viewStyle={styles.input}
            titleStyle={styles.inputTitle}
          />
          <FloatLabelTextField
            title="Zip / Postal Code *"
            viewStyle={styles.input}
            titleStyle={styles.inputTitle}
          />
          <View style={styles.checkbox_view}>
            <CheckBox
              onClick={() => {
                setChecked(!checked);
              }}
              isChecked={checked}
            />
            <View>
              <Typography style={styles.label}>
                I have read and agree to Cantaloupes's:
              </Typography>
              <Typography style={styles.label_orange}>Terms of Use</Typography>
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
  );
};
let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },

  title: {
    fontWeight: '400',
    fontSize: 40,
    color: COLORS.secondaryGray,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 26,
    paddingTop: 10,
    paddingBottom: 30,
    fontWeight: '400',
  },
  continue: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.primaryGray,
  },
  btnBackTitle: {
    color: COLORS.primaryGray,
  },
  inputTitle: {
    color: COLORS.primaryGray,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {},
  label: {
    fontSize: 16,
  },
  label_orange: {
    color: COLORS.orange,

    fontSize: 18,
    paddingTop: 7,
  },
  checkbox_view: {
    width: width - 20,
    paddingLeft: 10,
    fontWeight: 700,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
  },

  overlayBtnCont: {
    width: '90%',
    height: '17%',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 20,
    shadowColor: COLORS.black,
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  completeBtn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    minHeight: 60,
  },
  btnBack: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    minHeight: 60,
    backgroundColor: 'transparent',
  },
});

export default SignIn;
