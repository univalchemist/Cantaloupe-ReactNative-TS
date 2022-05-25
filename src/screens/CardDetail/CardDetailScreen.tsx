import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CardDetailsScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {
  CardImage1,
  ManuallyReloadIcon,
  RightArrow,
  WalletIcon,
} from '@assets/icon';
import {AutoReload} from '@components/AutoReload';
import {Button} from '@components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardDetailScreen = ({}: CardDetailsScreenProp) => {
  const navigation = useNavigation<CardDetailsScreenProp>();

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />

        <CardImage
          containerStyle={styles.cardImagContainer}
          CardImg={
            <CardImage1
              width={wp('80%%')}
              height={hp('25%')}
              style={styles.cardImage1BG}
              preserveAspectRatio="xMinYMin slice"
            />
          }
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTxt}>Balance</Text>
          <Text style={styles.balanaceAmount}>$50</Text>
        </View>
        <View style={styles.cardNoContainer}>
          <Text style={styles.cardNo}>CPay •• 5743</Text>
          <Text style={styles.cardTypeTxt}>This is the Primary Card</Text>
        </View>
        <AutoReload balance="50" onPress={() => {}} />
        <TouchableOpacity
          style={styles.manuallyReload}
          onPress={() => {
            navigation.navigate('MapScreen');
          }}>
          <ManuallyReloadIcon />
          <Text style={styles.ManualReloadTxt}>Manually Reload</Text>
          <RightArrow width={wp('4%')} />
        </TouchableOpacity>
        <Button
          onPress={() => {}}
          title="Add to Apple Wallet"
          style={styles.addToWallet}
          titleStyle={styles.addToWalletTxt}
          leftIcon={<WalletIcon width={wp('12%')} />}
        />
        <View style={[styles.separator]} />
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('72%'),
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  balanceTxt: {
    fontWeight: '600',
    fontSize: hp('2.8%'),
    color: COLORS.black,
    flex: 1,
  },
  balanaceAmount: {
    fontWeight: '500',
    fontSize: hp('2.8%'),
    color: COLORS.orange,
  },
  cardNoContainer: {
    width: wp('72%'),
    alignSelf: 'center',
    height: hp('6%'),
    marginBottom: hp('0.6%'),
  },
  cardNo: {
    fontWeight: '600',
    fontSize: hp('2.1%'),
    color: COLORS.black,
    flex: 1,
  },
  cardTypeTxt: {
    fontSize: hp('1.7%'),
    color: COLORS.primaryGray,
  },
  separatorCont: {
    position: 'absolute',
    bottom: hp('4.7%'),
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: hp('0.3%'),
    width: wp('85%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  manuallyReload: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('72%'),
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  ManualReloadTxt: {
    fontWeight: '600',
    fontSize: hp('2.5%'),
    color: COLORS.black,
    flex: 1,
    marginHorizontal: wp('3.8%'),
  },
  addToWallet: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
    minHeight: hp('6.2%'),
    backgroundColor: COLORS.black,
  },
  addToWalletTxt: {
    fontSize: hp('2.15%'),
  },
  cardImagContainer: {
    marginTop: hp('2%'),
  },
  cardImage1BG: {backgroundColor: COLORS.blue1},
});
export default CardDetailScreen;
