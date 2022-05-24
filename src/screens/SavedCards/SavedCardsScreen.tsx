import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {SavedCardsScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {
  PayRollCard,
  CardLogo,
  EmptyCardLogo,
  InfoIcon,
  HelpIcon,
  HistoryIcon,
  MapIcon,
  RewardIcon,
} from '@assets/icon';
import {CardType} from '@components/CardType';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScreenOption} from '@components/ScreenOption';
import {CopyRightsSection} from '@components/CopyRightsSection';

const SavedCardsScreen = ({}: SavedCardsScreenProp) => {
  const navigation = useNavigation<SavedCardsScreenProp>();

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <Header onPressRight={() => Alert.alert('Go to profile screen')} />

        <CardType
          primaryTxt={'Primary'}
          style={styles.cardTypeStyle1}
          CardLogo={<CardLogo width={wp('25.5%')} />}
          balance="$50"
          cardNumber="More card •• 5743"
          onPress={() => {}}
          InfoIcon={null}
        />
        <CardType
          style={styles.cardTypeStyle2}
          CardLogo={<PayRollCard width={wp('25.5%')} />}
          balance="$0"
          cardNumber="More card •• 9898"
          onPress={() => {}}
          InfoIcon={null}
        />

        <CardType
          style={styles.cardTypeStyle2}
          CardLogo={<EmptyCardLogo width={wp('25.5%')} />}
          cardNumber="Add CPay Card"
          onPress={() => {}}
          InfoIcon={<InfoIcon width={wp('3.8%')} />}
        />
        <View style={[styles.separator1]} />

        <ScreenOption
          onPress={() => {}}
          text="Locations"
          Icon={MapIcon}
          style={{marginTop: hp('4.5%')}}
        />
        <ScreenOption
          onPress={() => {}}
          text="Transactions"
          Icon={HistoryIcon}
        />
        <ScreenOption
          onPress={() => {}}
          text="More Rewards"
          Icon={RewardIcon}
        />
        <ScreenOption onPress={() => {}} text="FAQ" Icon={HelpIcon} />

        <View style={[styles.separator1, {marginTop: hp('3%')}]} />
        <CopyRightsSection />
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: hp('0.3%'),
    width: wp('85%'),
    alignSelf: 'center',
    marginVertical: hp('3%'),
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: hp('2%'),
    color: COLORS.white,
    position: 'absolute',
    top: hp('-2%'),
    right: wp('7.5%'),
    backgroundColor: COLORS.blue,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.8%'),
    borderRadius: 13,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  separatorCont1: {
    position: 'absolute',
    bottom: hp('4.8%'),
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator1: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: wp('85%'),
    alignSelf: 'center',
    marginTop: hp('4%'),
  },
  cardImagContainer: {
    marginTop: hp('3%'),
  },
  cardImage1BG: {backgroundColor: COLORS.blue1},
  cardTypeStyle1: {marginTop: hp('7%'), width: wp('88%')},
  cardTypeStyle2: {marginTop: hp('4.8%'), width: wp('88%')},
});
export default SavedCardsScreen;
