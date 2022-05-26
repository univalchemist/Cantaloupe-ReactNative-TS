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
import { cardArray, choiceToMove, termsANdConditions } from '../mock';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddCards = ({ }: AddCardsScreenProp) => {
  const navigation = useNavigation<AddCardsScreenProp>();

  
  return (
    <GradientScrollingWrapper style={styles.mapBackgroundGradient} scrollable={true}>
      <StatusBar translucent={true} backgroundColor={COLORS.transparent} />
      <Header style={styles.header} onPressRight={() => { }} />
      <FlatList
        style={{ flex: 1 }}
        data={cardArray}
        renderItem={(item) => {
          return (
            <Card
              key={"index"}
              CardLogo={<CardImage width={windowWidth / 3} height={windowHeight / 9.5} style={styles.svgStyle} />}
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
          key={"index"}
          onPress={() => navigation.navigate('MapScreen')}
          CardLogo={<LocationIcon style={styles.locationIconStyle} />}
          style={[styles.locationStyle, index === 3 && { marginBottom: 20 }]}
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
    paddingTop: moderateScale(50),
  },
  mapBackgroundGradient: {
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(10)
  },
  btnCreate: {
    backgroundColor: COLORS.transparent,
  },
  locationIconStyle: {
    marginLeft: moderateScale(15),
  },
  brandName: {
    textAlign: "center",
    fontSize: moderateScale(20),
    color: COLORS.black,
    fontWeight: "300",
    marginBottom: moderateScale(15),
    paddingHorizontal:moderateScale(10)
  },
  buttonTextStyle: {
    color: COLORS.gray1,
    fontSize: moderateScale(15),
  },
  locationStyle: {
    paddingHorizontal: moderateScale(25),
    justifyContent: "center",
    marginTop: moderateScale(10)
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: hp('2.7%')
  },
  bottomBorder: {
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: moderateScale(2),
    width: "85%",
    alignSelf: "center",
    marginTop: moderateScale(5),
    marginBottom: moderateScale(18)
  },
  addCardButtonContainer: {
    backgroundColor: COLORS.transparent,
    justifyContent: "flex-start",
    paddingLeft: moderateScale(20)
  },
  cardTypeStyle: {
    justifyContent: "flex-start",
  },
  cardImage: {
    width: "30%",
    height: "30%"
  },
  header: {
    width: wp('95%'),
  },
  svgStyle: {
    marginLeft: moderateScale(0)
  },
});
export default AddCards;
