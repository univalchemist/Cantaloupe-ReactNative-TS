import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AutoReload3Props} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {CardImage} from '@components/CardImage/CardImage';

import {Typography} from '@components/Typography';
import {
  Button,
  GoBackHeader,
  ReloadCardImage,
  Separator,
} from '@components/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CantaloupeMoreCardType} from '@models/enums/CantaloupeMoreCardType';
import {ConfirmCardDetail} from '@components/ConfirmCardDetail/ConfirmCardDetail';
import {AutoReloadDone} from '@components/AutoReloadDone';

const AutoReloadScreen3 = ({route}: AutoReload3Props) => {
  const [isReloadDone, setIsReloadDone] = useState(false);
  const [selectedBank, setSelectedBank] = useState(route?.params.selectedBank);
  const navigation = useNavigation<AutoReload3Props>();

  const backPressed = () => {
    navigation.popToTop();
  };

  return (
    <GradientScrollingWrapper scrollable={true} thirdColor={COLORS.white}>
      {!isReloadDone && (
        <View style={styles.container}>
          <GoBackHeader
            headerState="addCard"
            label="BACK"
            onPress={() => backPressed()}
          />
          <Typography style={styles.screenTitle}>Reload Card</Typography>
          <ReloadCardImage
            CardLogo={
              <CardImage
                cardType={CantaloupeMoreCardType.PREPAID_CARD}
                width={100}
              />
            }
            cardNumber="More Card •• 5743"
            balance="50.00"
          />
          <Separator />
          <Typography style={styles.reviewPayment}>
            {' '}
            Review Your Payment (Click to Pay)
          </Typography>

          <View style={styles.cardDetail}>
            <ConfirmCardDetail
              cardName={selectedBank?.cardName}
              cardNumber={selectedBank?.cardNumber}
              CardLogo={selectedBank?.CardLogo}
              onPressCard={() => {}}
            />
          </View>

          <Button
            onPress={() => {
              setIsReloadDone(true);
            }}
            title="Continue"
            style={styles.confirmBtn}
            titleStyle={styles.ConfirmTxt}
            leftIcon={null}
          />
        </View>
      )}
      {isReloadDone && (
        <AutoReloadDone
          belowBalance={5}
          chargedBalance={30}
          handleBackHome={() => backPressed()}
        />
      )}
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},

  screenTitle: {
    fontSize: hp('3.8%'),
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  reviewPayment: {
    fontSize: hp('2%'),
    fontWeight: 'normal',
  },
  cardDetail: {
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
  },
  confirmBtn: {
    backgroundColor: COLORS.black,
    borderRadius: 40,
    minHeight: 50,
  },
  ConfirmTxt: {
    backgroundColor: COLORS.black,
    borderRadius: 40,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
});
export default AutoReloadScreen3;
