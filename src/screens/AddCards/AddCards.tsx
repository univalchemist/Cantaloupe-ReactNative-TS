import React from 'react';
import { StatusBar, StyleSheet, View, Dimensions, Text, FlatList, ScrollView, Alert } from 'react-native';
import { AddCardsScreenProp } from '../../navigation/MainNavigator';
import { COLORS } from '@theme/color';
import { useNavigation } from '@react-navigation/native';
import { GradientScrollingWrapper } from '@components/GradientWrapper';
import { Header } from '@components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Card } from '@components/CardType/Card';
import {
  CardImage,
  RightArrow,
  AddIcon,
  LocationIcon,
  TransactionIcon,
  RewardsIcon,
  FaqIcon
} from '@assets/icon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Button, TouchableTextButton } from '@components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddCards = ({ }: AddCardsScreenProp) => {
  const navigation = useNavigation<AddCardsScreenProp>();

  const array = [{ balance: "$50", cardNumber: "More card •• 5743" }, { balance: "", cardNumber: "CPay Card" }]
  const termsANdConditions = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']
  const choiceToMove = ['Locations', 'Transactions', 'MORE rewards', 'FAQ']

  return (
    <GradientScrollingWrapper style={styles.mapBackgroundGradient} scrollable={true}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Header style={styles.header} onPressRight={() => { }} />
      <FlatList
        style={{ flex: 1 }}
        data={array}
        renderItem={(item) => {
          return (
            <Card
            onPress={()=>{}}
              CardLogo={<CardImage width={windowWidth / 3} height={windowHeight / 8} style={styles.svgStyle} />}
              style={styles.cardTypeStyle}
              balance={item.item.balance != '' && item.item.balance}
              cardNumber={item.item.cardNumber}
            />
          )
        }}
      />
      <Button
        style={styles.addCardButtonContainer}
        leftIcon={<AddIcon width={windowWidth / 9} />}
        title={'Add More Card'}
        titleStyle={styles.buttonText}
        onPress={() => { }} />
      <View style={styles.bottomBorder} />
      {choiceToMove.map((item, index) => {
        return <Card
          CardLogo={<LocationIcon style={styles.locationIconStyle} />}
          style={[styles.locationStyle, index === 3 && { marginBottom:20}]}
          balance={undefined}
          cardNumber={item}
        />
      })}
      <View style={styles.bottomBorder} />
      <Text style={styles.brandName}>©2021 Cantaloupe, Inc. All Rights Reserved.</Text>
      {termsANdConditions.map(((item, index) => {
        return <TouchableTextButton key={index} style={styles.btnCreate} titleStyle={styles.buttonTextStyle} onPress={() => { }} title={item} />
      }))}
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  mapBackgroundGradient: {
    paddingTop: 40,
    paddingBottom: 10
  },
  btnCreate: {
    backgroundColor: "transparent",

  },
  dollarFont: {
    fontSize: hp('3.5%'),
    color: COLORS.orange,
  },
  locationIconStyle: {
    marginLeft: 15,
  },
  brandName: {
    textAlign: "center",
    fontSize: hp('3%'),
    color: COLORS.black,
    fontWeight: "300",
    marginBottom: 20
  },
  buttonTextStyle: {
    color: COLORS.gray1,
    fontSize: 18,

  },
  locationStyle: {
    paddingHorizontal: 25,
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: hp('2.7%')
  },
  bottomBorder: {
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 2,
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 18
  },
  addCardButtonContainer: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    paddingLeft: 20
  },
  cardNumber: {
    fontSize: hp('1.8%'),
    color: COLORS.gray1,
    fontWeight: "bold",
  },
  cardTypeStyle: {
    justifyContent: "flex-start",
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 40,
    color: COLORS.secondaryGray,
    alignSelf: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '400',
    alignSelf: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cardImagContainer: {
    marginTop: hp('2%'),
  },
  cardImage1BG: { backgroundColor: COLORS.blue1 },
  paragraph: {
    fontSize: 16,
    padding: 25,
    textAlign: 'center',
    color: COLORS.primaryGray,
  },
  paragraph_view: {},
  email: {
    color: COLORS.orange,
  },
  cardImage: {
    width: "30%",
    height: "30%"
  },
  header: {
    width: wp('95%')
  },
  svgStyle: {
    marginLeft: 0
  },
  cardRowStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "space-between"
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15
  },
});
export default AddCards;
