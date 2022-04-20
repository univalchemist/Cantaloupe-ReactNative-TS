import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {WelcomeScreenProp} from '../../navigation/MainNavigator';
const Welcome = ({navigation}: WelcomeScreenProp) => {
  return <Text style={styles.welcome}>Welcome Screen</Text>;
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
export default Welcome;
