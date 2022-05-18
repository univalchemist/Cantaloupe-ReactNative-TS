import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CardDetailsScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {
  CardImage1,
  ManaullyReloadIcon,
  RightArrow,
  WalletIcon,
} from '@assets/icon';
import {AutoReload} from '@components/AutoReload';
import {Button} from '@components/Button';

const CardDetailScreen = ({}: CardDetailsScreenProp) => {
  const navigation = useNavigation<CardDetailsScreenProp>();

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor="#fff">
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />
        <CardImage
          CardImg={<CardImage1 style={{backgroundColor: '#004890'}} />}
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTxt}>Balance</Text>
          <Text style={styles.balanaceAmount}>$50</Text>
        </View>
        <View style={styles.cardNoContainer}>
          <Text style={styles.cardNo}>CPay •• 5743</Text>
          <Text style={styles.cardTypeTxt}>This is the Primary Card</Text>
        </View>
        <AutoReload
          balance="50"
          onPress={() => {
            navigation.navigate('ReloadCard');
          }}
        />
        <TouchableOpacity style={styles.manuallyReload}>
          <ManaullyReloadIcon />
          <Text style={styles.ManaulReloadTxt}>Manaully Reload</Text>
          <RightArrow />
        </TouchableOpacity>
        <Button
          onPress={() => {}}
          title="Add to Apple Wallet"
          style={styles.addToWallet}
          titleStyle={styles.addToWalletTxt}
          leftIcon={<WalletIcon />}
        />
      </GradientScrollingWrapper>
      <View style={styles.separatorCont}>
        <View style={[styles.separator]} />
      </View>
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
    width: '72%',
    alignSelf: 'center',
    marginVertical: 18,
  },
  balanceTxt: {
    fontWeight: '600',
    fontSize: 26,
    color: COLORS.black,
    flex: 1,
  },
  balanaceAmount: {
    fontWeight: '500',
    fontSize: 26,
    color: COLORS.orange,
  },
  cardNoContainer: {
    width: '72%',
    alignSelf: 'center',
    height: '10%',
  },
  cardNo: {
    fontWeight: '600',
    fontSize: 20,
    color: COLORS.black,
    flex: 1,
  },
  cardTypeTxt: {
    fontSize: 16,
    color: COLORS.primaryGray,
  },
  separatorCont: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: '85%',
  },
  manuallyReload: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '72%',
    alignSelf: 'center',
    marginVertical: 18,
  },
  ManaulReloadTxt: {
    fontWeight: '600',
    fontSize: 24,
    color: COLORS.black,
    flex: 1,
    marginHorizontal: 15,
  },
  addToWallet: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    minHeight: 50,
    backgroundColor: COLORS.black,
  },
  addToWalletTxt: {
    // width: '90%',
    // alignSelf: 'center',
    fontSize: 18,
  },
});
export default CardDetailScreen;
