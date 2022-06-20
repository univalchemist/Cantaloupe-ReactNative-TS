import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {AutoReload1Props, CardScreensParamList} from '@navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {CardImage} from '@components/CardImage/CardImage';
import {VisaIcon, CardSymbolIcon} from '@assets/icon';
import {Typography} from '@components/Typography';
import {
  CardAmountDropDown,
  GoBackHeader,
  PaymentMethodCard,
  Separator,
} from '@components/index';
import {AutoReloadSwitch} from '@components/AutoReloadSwitch';
import {Card} from '@components/CardType';
import {ManuallyEnterCardText} from '@components/ManuallyEnterCardText';

const AutoReloadScreen1 = () => {
  const route = useRoute<RouteProp<CardScreensParamList, 'AutoReload1'>>();
  const [enableAutoReload, setEnableAutoReload] = useState(true);
  const [items, setItems] = useState([
    {label: '$5', value: '50'},
    {label: '$10', value: '100'},
    {label: '$20', value: '200'},
  ]);
  const navigation = useNavigation<AutoReload1Props>();
  const card = useMemo(() => route.params.card, [route]);

  const backPressed = () => {
    navigation.popToTop();
  };

  return (
    <GradientScrollingWrapper scrollable={true} thirdColor={COLORS.white}>
      <View style={styles.container}>
        <GoBackHeader
          headerState="addCard"
          label="BACK"
          onPress={() => backPressed()}
        />
        <AutoReloadSwitch handleSwitch={setEnableAutoReload} />
        <View style={styles.cardContainer}>
          <Card
            CardLogo={<CardImage width={wp('33.33%')} height={hp('10.52%')} />}
            style={styles.cardTypeStyle}
            balance={`$${card?.balance.toString() ?? ''}`}
            cardNumber={card?.cardNum ?? ''}
            hideRightArrow={true}
          />
        </View>
        <Separator />
        {enableAutoReload && (
          <View>
            <Typography style={styles.reloadSettings}>
              Auto Reload Settings
            </Typography>
            <Typography style={styles.reloadWith}>Reload With:</Typography>
            <CardAmountDropDown
              onPress={() => {}}
              items={items}
              setItems={setItems}
              style={styles.dropDown}
            />
            <Typography style={styles.reloadWith}>
              When Balance Falls Below:
            </Typography>
            <CardAmountDropDown
              zIndex={2000}
              zIndexInverse={2000}
              onPress={() => {}}
              items={items}
              setItems={setItems}
              style={styles.dropDown}
            />
            <Typography style={styles.reloadWith}>Payment Method:</Typography>
            <PaymentMethodCard
              CardTypeIcon={<VisaIcon width={wp('13%')} />}
              CardIcon={<CardSymbolIcon width={wp('11%')} />}
              phoneNumber="+1 (•••) •••-•567"
              onPressContinueTxt={() => {}}
              onPressContinueBtn={() =>
                navigation.navigate('AutoReload2', {card: route.params.card})
              }
              showCardIconsOnTop={true}
            />
            <ManuallyEnterCardText onPress={() => {}} />
          </View>
        )}
      </View>
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},

  cardTypeStyle: {
    justifyContent: 'flex-start',
  },
  cardContainer: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  reloadSettings: {
    fontSize: hp('3%'),
    marginVertical: hp('2%'),
  },
  reloadWith: {
    fontSize: hp('2.5%'),
    marginVertical: hp('0.5%'),
  },
  dropDown: {
    marginVertical: hp('2%'),
  },
});
export default AutoReloadScreen1;
