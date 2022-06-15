import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {AutoReload2Props} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {CardImage} from '@components/CardImage/CardImage';
import {
  VisaIcon,
  CardSymbolIcon,
  PartnerCardGreen,
  PartnerCardBlack,
} from '@assets/icon';
import {Typography} from '@components/Typography';
import {CardAmountDropDown, GoBackHeader, Separator} from '@components/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AutoReloadSwitch} from '@components/AutoReloadSwitch/AutoReloadSwitch';
import {Card} from '@components/CardType';
import {ManuallyEnterCardText} from '@components/ManuallyEnterCardText';
import {ChooseCard} from '@components/ChooseCard';
import {CardConfirmModal} from '@components/CardConfirmModal';

const AutoReloadScreen2 = ({}: AutoReload2Props) => {
  const [enableAutoReload, setEnableAutoReload] = useState(true);
  const [selectedBank, setSelectedBank] = useState();

  const [items, setItems] = useState([
    {label: '$5', value: '50'},
    {label: '$10', value: '100'},
    {label: '$20', value: '200'},
  ]);
  const [savedCards, setSavedCards] = useState([
    {
      CardLogo: <PartnerCardBlack />,
      cardName: 'Cash Back Mastercard',
      cardNumber: '•• 2058',
    },
    {
      CardLogo: <PartnerCardGreen />,
      cardName: 'Cash Back Mastercard',
      cardNumber: '•• 2058',
    },
  ]);
  const refRBSheet = useRef();
  const navigation = useNavigation<AutoReload2Props>();

  const backPressed = () => {
    navigation.popToTop();
  };

  return (
    <GradientScrollingWrapper scrollable={false} thirdColor={COLORS.white}>
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
            <Typography style={styles.reloadWith}>Reload With:</Typography>
            <CardAmountDropDown
              onPress={() => {}}
              items={items}
              setItems={setItems}
              style={styles.dropDown}
            />

            <Typography style={[styles.reloadWith, {marginBottom: hp('2%')}]}>
              Choose a Card:
            </Typography>
            <ChooseCard
              CardTypeIcon={<VisaIcon width={wp('13%')} />}
              CardIcon={<CardSymbolIcon width={wp('11%')} />}
              cardsList={savedCards}
              handleSelectedCard={bank => {
                setSelectedBank(bank);
                refRBSheet.current.open();
              }}
            />
            <ManuallyEnterCardText onPress={() => {}} />
          </View>
        )}
        <CardConfirmModal
          selectedBank={selectedBank}
          refRBSheet={refRBSheet}
          handleConfirm={() => {
            refRBSheet.current.close();
            navigation.navigate('AutoReload3', {selectedBank});
          }}
        />
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

  reloadWith: {
    fontSize: hp('2.5%'),
    marginVertical: hp('0.5%'),
  },

  dropDown: {
    marginVertical: hp('2%'),
  },
});
export default AutoReloadScreen2;
