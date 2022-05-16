import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ReloadCardScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {CardImage2} from '@assets/icon';
import {ReloadCardImage} from '@components/ReloadCardImage';
import {Typography} from '@components/Typography';
import {CardAmountDropDown} from '@components/CardAmountDropDown/CardAmountDropDown';

const ReloadCardScreen = ({}: ReloadCardScreenProp) => {
  const navigation = useNavigation<ReloadCardScreenProp>();

  return (
    <GradientScrollingWrapper thirdColor="#fff">
      <Header onPressRight={() => Alert.alert('Go to profile screen')} />
      <View style={styles.container}>
        <Typography style={styles.screenTitle}>Reload Card</Typography>
        <ReloadCardImage
          CardLogo={
            <CardImage
              cardTypeText={
                <Typography style={styles.primaryTxt}>PRIMARY</Typography>
              }
              CardImg={<CardImage2 style={{backgroundColor: '#004890'}} />}
            />
          }
          cardNumber="More Card •• 5743"
          balance="50.00"
        />
        <Typography style={styles.reloadWithTxt}>Reload With:</Typography>
        <CardAmountDropDown
          onPress={selectedValue =>
            console.log('selectedValue ', selectedValue)
          }
          data={[200, 300, 400, 500]}
        />
        <Typography style={styles.screenTitle}>Reload Card</Typography>

        {/* <View style={styles.separatorCont}>
          <View style={[styles.separator]} />
        </View> */}
      </View>
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginVertical: 20,
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: 6,
    color: COLORS.white,
    marginLeft: 7,
    position: 'absolute',
    top: -6,
    right: -2,
    backgroundColor: COLORS.blue,
    padding: 3,
    borderRadius: 5,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  reloadWithTxt: {
    fontFamily: 'Rubik',
    color: COLORS.black,
    fontWeight: '300',
    fontSize: 20,
    marginVertical: 20,
    fontStyle: 'normal',
  },
  separatorCont: {
    position: 'absolute',
    bottom: '-7%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
  },
});
export default ReloadCardScreen;
