import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {AddCardScreenProp} from '@navigation/TabNavigator';
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
  registerStoredValueCard,
  RegisterStoredValueCardPassResponse,
} from '@apollo-endpoints/index';
import {OrangeQuestionMarkIcon} from '@assets/icon';

const AddCardScreen = ({navigation}: AddCardScreenProp) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [code, setCode] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [shouldShowConfirmModal, setShouldShowConfirmModal] = useState(false);
  const [shouldShowErrorModal, setShouldShowErrorModal] = useState(false);

  const backPressed = () => {
    navigation.popToTop();
  };
  const validate = () => {
    let errors = '';

    if (!cardNumber || cardNumber.length < 19) {
      errors += 'Please enter a valid card number.';
    }

    if (!code || code.length < 4) {
      errors += '\nPlease enter a valid security code.';
    }

    return errors;
  };

  const presentModal = (state: string, message?: string) => {
    switch (state) {
      case 'error':
        setErrorMessage(
          message ?? 'There was an error. Please consult an admin.',
        );
        setShouldShowErrorModal(true);
        return;
      case 'success':
        return;
    }
  };

  const addCardPressed = () => {
    const validationResults = validate();
    if (validationResults.length > 0) {
      presentModal('error', validationResults);
      return;
    }
    registerCard();
  };

  const registerCard = async () => {
    await registerStoredValueCard({cardNumber, code}).then(
      (response: RegisterStoredValueCardPassResponse) => {
        if (response && response?.success) {
          setShouldShowConfirmModal(true);
        } else {
          presentModal('error', response.message);
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
          onPress={() => backPressed()}
        />
        <View style={styles.innerContainer}>
          <Typography style={styles.headerText}>Add More Card</Typography>
          <Typography style={styles.formLabel}>More Card number:</Typography>
          <FloatLabelTextField
            title="Enter More Card Number"
            titleStyle={styles.inputTitle}
            onTextChange={text => {
              setCardNumber(text);
            }}
          />
          <Typography style={styles.formLabel}>Security Code:</Typography>
          <FloatLabelTextField
            title="Enter 4 Digit Code"
            titleStyle={styles.inputTitle}
            onTextChange={text => {
              setCode(text);
            }}
          />
          <View style={styles.contactTextContainer}>
            <OrangeQuestionMarkIcon />
            <Typography style={styles.contactText}>
              Don’t yet have a more card? Please contact your program
              administrator.
            </Typography>
          </View>
          <Button title={'Add Card'} onPress={() => addCardPressed()} />
        </View>
      </GradientScrollingWrapper>
      {shouldShowConfirmModal && (
        <ModalAlert
          primaryText={'More Card added'}
          subText={'More card was successfully added to your account'}
          actionText={'Proceed to Home'}
          canCancel={false}
          onAction={() => backPressed()}
        />
      )}
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
  headerText: {fontSize: 32, lineHeight: 38},
  formLabel: {fontSize: 16, lineHeight: 20, marginVertical: 10},
  inputTitle: {
    color: COLORS.primaryGray,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
  contactTextContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  contactText: {
    color: COLORS.orange,
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 10,
  },
});
export default AddCardScreen;
