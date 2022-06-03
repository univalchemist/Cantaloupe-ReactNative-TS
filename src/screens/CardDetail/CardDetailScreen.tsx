import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CardDetailsScreenProp} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';

import {CardImage1, ManuallyReloadIcon, RightArrow} from '@assets/icon';
import {
  AutoReload,
  AddToWalletButton,
  Header,
  CardImage,
  GradientScrollingWrapper,
} from '@components/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  fetchProntoPass,
  CreateOrFindProntoPassResponse,
} from '@apollo-endpoints/index';
import {handlePassFromURL} from '@helpers/passManager';

const CardDetailScreen = ({route, navigation}: CardDetailsScreenProp) => {
  // const navigation = useNavigation<CardDetailsScreenProp>();
  const [passURL, setPassURL] = useState<string>();
  const {
    params: {
      card: {cardId},
    },
  } = route;

  useEffect(() => {
    if (passURL && passURL?.length > 0) {
      handlePassFromURL(passURL);
    }
  }, [passURL]);

  const handleAutoReloadButtonPressed = () => {
    //  handle auto-reload
  };

  const didPressAddToWallet = () => {
    fetchProntoPass({cardId: cardId})
      .then((response: CreateOrFindProntoPassResponse) => {
        if (response && response?.prontoPassURLiOS) {
          const url = response.prontoPassURLiOS;
          setPassURL(url);
        } else {
          //  Surface error
          console.log('PROBLEM WITH REQUEST');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

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
          <Text>$50</Text>
        </View>
        <View style={styles.cardNoContainer}>
          <Text style={styles.cardNo}>CPay •• 5743</Text>
          <Text style={styles.cardTypeTxt}>This is the Primary Card</Text>
        </View>
        <AutoReload
          balance="50"
          onPress={() => handleAutoReloadButtonPressed()}
        />
        <TouchableOpacity
          style={styles.manuallyReload}
          onPress={() => {
            navigation.navigate('ReloadCard');
          }}>
          <ManuallyReloadIcon />
          <Text style={styles.ManualReloadTxt}>Manually Reload</Text>
          <RightArrow width={wp('4%')} />
        </TouchableOpacity>
        <View style={styles.appleWalletContainer}>
          <AddToWalletButton
            onPress={() => {
              didPressAddToWallet();
            }}
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
  balanceAmount: {
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
  appleWalletContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
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
  cardImagContainer: {
    marginTop: hp('2%'),
  },
  cardImage1BG: {backgroundColor: COLORS.blueDark},
});
export default CardDetailScreen;
