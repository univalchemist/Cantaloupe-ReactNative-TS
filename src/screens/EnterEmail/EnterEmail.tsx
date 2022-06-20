import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {EnterEmailScreenProp} from '@navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {
  Button,
  GoBackHeader,
  GradientScrollingWrapper,
  Typography,
  FloatLabelTextField,
  ModalAlert,
} from '@components/index';
import {
  DetectExistingUserResponse,
  getIsExistingUser,
} from '@apollo-endpoints/index';
import {validateEmail} from '@utils/formValidation';

const EnterEmailScreen = () => {
  const navigation = useNavigation<EnterEmailScreenProp>();
  const [email, setEmail] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState('');
  const [shouldShowErrorModal, setShouldShowErrorModal] = useState(false);

  const backPressed = () => {
    navigation.pop();
  };
  const validate = () => {
    let errors = '';
    if (email.length === 0 || !validateEmail(email)) {
      errors += 'Please enter a valid email.';
    }

    return errors;
  };

  const presentModal = (message?: string) => {
    setErrorMessage(message ?? 'There was an error. Please consult an admin.');
    setShouldShowErrorModal(true);
    return;
  };

  const nextStepPressed = () => {
    const validationResults = validate();
    if (validationResults.length > 0) {
      presentModal(validationResults);
      return;
    }
    registerCard();
  };

  const registerCard = async () => {
    await getIsExistingUser({email}).then(
      (response: DetectExistingUserResponse) => {
        console.log(response);
        if (response && !response.isExistingUser) {
          navigation.navigate('CreateAccount', email);
        } else {
          presentModal(response.message);
        }
      },
    );
  };

  return (
    <>
      <GradientScrollingWrapper style={styles.container}>
        <GoBackHeader
          headerState="addCard"
          label="BACK"
          onPress={backPressed}
        />
        <View style={styles.innerContainer}>
          <Typography style={styles.headerText}>Create Account</Typography>
          <FloatLabelTextField
            title="Enter your email*"
            titleStyle={styles.inputTitle}
            onTextChange={text => {
              setEmail(text);
            }}
            startingValue={email}
            clearButton={true}
          />
          <Button title={'Next step'} onPress={nextStepPressed} />
        </View>
      </GradientScrollingWrapper>
      {shouldShowErrorModal && (
        <ModalAlert
          primaryText={'Error'}
          subText={errorMessage}
          actionText={'OK'}
          canCancel={false}
          onAction={() => setShouldShowErrorModal(false)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headerText: {fontSize: 32, lineHeight: 38, marginBottom: 25},

  inputTitle: {
    color: COLORS.primaryGray,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
});
export default EnterEmailScreen;
