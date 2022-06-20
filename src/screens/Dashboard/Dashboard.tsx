import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {DashboardScreenProp} from '../../navigation/MainNavigator';

import {Button} from '@components/Button';
import {LogoMore} from '@assets/icon';
import {COLORS} from '@theme/color';
import {Typography} from '@components/Typography';
import {GradientScrollingWrapper} from '@components/GradientWrapper';

const Dashboard = () => {
  const navigation = useNavigation<DashboardScreenProp>();

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <LogoMore />
          </View>
          <View style={styles.section}>
            <View>
              <Typography style={styles.title}>Welcome!</Typography>
            </View>
            <View>
              <Typography style={styles.subtitle}>Thank you for</Typography>
              <Typography style={styles.subtitle}>
                registering with More!
              </Typography>
            </View>
            <View style={styles.paragraph_view}>
              <Typography style={styles.paragraph}>
                We've sent a message to
                <Typography style={styles.email}>
                  {' '}
                  john@icloud.com
                </Typography>{' '}
                to verify your email address
              </Typography>
            </View>
          </View>
          <Button
            title="Continue"
            onPress={() => {
              navigation.navigate('BottomTabs');
            }}
            style={styles.btnCreate}
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
  innerContainer: {
    marginTop: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginVertical: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '300',
    fontSize: 40,
    color: COLORS.secondaryGray,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '400',
    alignSelf: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btnCreate: {
    marginLeft: 15,
    bottom: 10,
    position: 'absolute',
    width: '92%',
    height: 50,
  },
  paragraph: {
    fontSize: 16,
    padding: 25,
    textAlign: 'center',
    color: COLORS.primaryGray,
  },
  paragraph_view: {},
  email: {
    color: COLORS.orange,
  },
});
export default Dashboard;
