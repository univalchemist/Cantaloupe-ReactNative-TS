import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AutoReload1Props} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AutoReloadSwitch} from '@components/AutoReloadSwitch/AutoReloadSwitch';
import {Card} from '@components/CardType';
import {ManuallyEnterCardText} from '@components/ManuallyEnterCardText';

const AutoReloadScreen1 = ({}: AutoReload1Props) => {
  const [enableAutoReload, setEnableAutoReload] = useState(true);
  const [items, setItems] = useState([
    {label: '$5', value: '50'},
    {label: '$10', value: '100'},
    {label: '$20', value: '200'},
  ]);
  const navigation = useNavigation<AutoReload1Props>();

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
            balance={'$50'}
            cardNumber={'More card •• 5743'}
            hideRightArrow={true}
          />
        </View>
        <Separator />
        {enableAutoReload && (
          <View>
            <Typography style={styles.reloadiSettings}>
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
              onPressContinueTxt={() => {
                navigation.navigate('AutoReload2');
              }}
              onPressContinueBtn={() => {}}
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
  reloadiSettings: {
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
