import {Button} from '@components/Button';
import {LogoMore} from '@assets/icon';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DashboardScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {Typography} from '@components/Typography';
import {GradientScrollingWrapper} from '@components/GradientWrapper';

const Dashboard = ({}: DashboardScreenProp) => {
  const navigation = useNavigation<DashboardScreenProp>();

  return (
    <GradientScrollingWrapper scrollable={false}>
      <View style={styles.container}>
        <View style={styles.logo}>
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
              <Typography style={styles.email}> john@icloud.com</Typography> to
              verify your email address
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
  title: {
    fontWeight: '400',
    fontSize: 40,
    color: COLORS.secondaryGray,
    alignSelf: 'center',
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
