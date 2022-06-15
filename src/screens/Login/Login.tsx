import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LoginScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {LogoMore} from '@assets/icon';
import {
  GradientScrollingWrapper,
  Typography,
  FloatLabelTextField,
  Button,
} from '@components/index';

import {loginUser} from '@apollo-endpoints/index';
import {UserInfo} from '@models/UserInfo';

const Login = ({}: LoginScreenProp) => {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userInfo, setUserInfo] = useState<UserInfo>();

  const login = async () => {
    await loginUser({email, password}).then((response: UserInfo) => {
      setUserInfo(response);
    });
  };

  useEffect(() => {
    if (userInfo && userInfo.accessToken && userInfo.accessToken.length > 0) {
      AsyncStorage.setItem('token', userInfo?.accessToken).then(() => {
        navigation.navigate('BottomTabs');
      });
    }
  }, [userInfo]);

  return (
    <GradientScrollingWrapper style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <LogoMore />
        </View>
        <View style={styles.titleContainer}>
          <Typography style={styles.title}>Sign In</Typography>
        </View>
        <FloatLabelTextField
          title="Enter your email"
          titleStyle={styles.inputTitle}
          onTextChange={text => {
            setEmail(text);
          }}
        />
        <FloatLabelTextField
          title="Password"
          titleStyle={styles.inputTitle}
          onTextChange={text => {
            setPassword(text);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => login()}
            title="Complete"
            style={styles.completeButton}
          />
          <Button
            title="Back Home"
            onPress={() => navigation.pop()}
            style={styles.backButton}
            titleStyle={styles.backButtonText}
          />
        </View>
      </View>
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 20,
  },
  logoContainer: {
    marginVertical: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 48,
    color: COLORS.secondaryGray,
    textAlign: 'center',
  },
  inputTitle: {
    color: COLORS.primaryGray,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  completeButton: {},
  completeButtonText: {},
  backButton: {backgroundColor: 'transparent'},
  backButtonText: {
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 20,
  },
});
export default Login;
