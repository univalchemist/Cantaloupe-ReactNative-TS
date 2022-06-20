import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {COLORS} from '@theme/color';
import {ManuallyReloadIcon, RightArrow} from '@assets/icon';
import {
  AutoReload,
  AddToWalletButton,
  Header,
  CardImage,
  GradientScrollingWrapper,
} from '@components/index';
import {
  fetchProntoPass,
  CreateOrFindProntoPassResponse,
} from '@apollo-endpoints/index';
import {handlePassFromURL} from '@helpers/passManager';
import {CardDetailsScreenProp} from '@navigation/TabNavigator';

const CardDetailScreen = ({route, navigation}: CardDetailsScreenProp) => {
  // const navigation = useNavigation<CardDetailsScreenProp>();
  const [passURL, setPassURL] = useState<string>();
  const {
    params: {
      card: {cardId, cardNum, cardType, balance, primary},
    },
  } = route;

  useEffect(() => {
    if (passURL && passURL?.length > 0) {
      handlePassFromURL(passURL);
    }
  }, [passURL]);

  const handleAutoReloadButtonPressed = () => {
    navigation.navigate('AutoReload1', {card: route.params.card});
  };

  const didPressAddToWallet = () => {
    fetchProntoPass({cardId: cardId})
      .then((response: CreateOrFindProntoPassResponse) => {
        if (response && response?.prontoPassURLiOS) {
          const url = response.prontoPassURLiOS;
          setPassURL(url);
        } else {
          //  Surface error
        }
      })
      .catch(error => {
        //  handle error
      });
  };

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <View style={styles.innerContainer}>
          <Header onPressRight={() => Alert.alert('Go to profile screen')} />
          <View style={styles.cardImageContainer}>
            <CardImage
              cardType={cardType}
              width={Dimensions.get('window').width - 80}
            />
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTxt}>Balance</Text>
            <Text style={styles.balanceAmount}>${balance ?? 0}</Text>
          </View>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumberText}>{cardNum}</Text>
            {primary && (
              <Text style={styles.primaryCardText}>
                This is the Primary Card
              </Text>
            )}
          </View>
          <AutoReload
            balance={balance}
            onPress={handleAutoReloadButtonPressed}
          />
          <TouchableOpacity
            style={styles.manuallyReloadContainer}
            onPress={() => {
              navigation.navigate('ReloadCard');
            }}>
            <View style={styles.manuallyReloadTextContainer}>
              <ManuallyReloadIcon />
              <Text style={styles.manualReloadText}>Manually Reload</Text>
            </View>
            <RightArrow width={44} />
          </TouchableOpacity>
          <View style={styles.appleWalletContainer}>
            <AddToWalletButton
              onPress={() => {
                didPressAddToWallet();
              }}
            />
          </View>
        </View>
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {marginHorizontal: 20, marginVertical: 10},
  cardImageContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
  },
  balanceTxt: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.black,
    flex: 1,
  },
  balanceAmount: {
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.orange,
  },
  cardNumberContainer: {
    marginBottom: 15,
  },
  cardNumberText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.black,
  },
  primaryCardText: {
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.primaryGray,
  },
  appleWalletContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  manuallyReloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  manuallyReloadTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  manualReloadText: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.black,
    marginLeft: 10,
    marginRight: 25,
  },
});
export default CardDetailScreen;
