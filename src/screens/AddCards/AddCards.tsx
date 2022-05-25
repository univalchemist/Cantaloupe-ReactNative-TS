import React from 'react';
import {StatusBar, StyleSheet, View, Dimensions, Text, FlatList, ScrollView} from 'react-native';
import {AddCardsScreenProp} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from '@components/Cards';
import {
  CardImage,
  RightArrow,
  AddIcon,
  LocationIcon,
  TransactionIcon,
  RewardsIcon,
  FaqIcon
} from '@assets/icon';
import {Button} from '@components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddCards = ({}: AddCardsScreenProp) => {
  const navigation = useNavigation<AddCardsScreenProp>();
  
  const array=[
    {
      balance:"$50",
      cardNumber:"More card •• 5743"
    },
    {
      balance:"",
      cardNumber:"CPay Card"
    }
  ]

  return (
    <GradientScrollingWrapper style={styles.mapBackgroundGradient} scrollable={false}>
     <StatusBar translucent={true} backgroundColor={'transparent'} />
     <Header style={styles.header} onPressRight={()=>{}}/>
     <FlatList
      data={array}
      renderItem={(item)=>{
        return (
         <Card
          CardLogo={<CardImage width={windowWidth/3} height={windowHeight/8} style={styles.svgStyle}/>}
          style={styles.cardTypeStyle}
          balance={item.item.balance != '' && item.item.balance}
          cardNumber={item.item.cardNumber}
        />
        )
      }}
      />
      <Button
      style={styles.addCardButtonContainer}
      leftIcon={<AddIcon width={windowWidth/9}/>}
      title={'Add More Card'}
      titleStyle={styles.buttonText}
       onPress={()=>{}}/>

       <View style={styles.bottomBorder}/>
     

      <Card
          CardLogo={<LocationIcon style={styles.locationIconStyle}/>}
          style={styles.locationStyle}
          balance={undefined}
          cardNumber={'Locations'}
        />
        <Card
          CardLogo={<FaqIcon style={styles.locationIconStyle}/>}
          style={styles.locationStyle}
          balance={undefined}
          cardNumber={'Locations'}
        />
        <Card
          CardLogo={<RewardsIcon style={styles.locationIconStyle}/>}
          style={styles.locationStyle}
          balance={undefined}
          cardNumber={'Locations'}
        />
        <Card
          CardLogo={<TransactionIcon style={styles.locationIconStyle}/>}
          style={styles.locationStyle}
          balance={undefined}
          cardNumber={'Locations'}
        />
        <View style={styles.bottomBorder}/>
        <Text style={styles.brandName}>©2021 Cantaloupe, Inc. All Rights Reserved.</Text>
        {Array('Privacy Policy', 'Terms of Use', 'Cookie Policy').map((item)=>{
        <Button onPress={()=>{}} title={item}/>})}
       </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  mapBackgroundGradient:{
    paddingTop:40
  },
  dollarFont:{
    fontSize: hp('3.5%'),
    color: COLORS.orange,
  },
  locationIconStyle:{
    marginLeft:15,
  },
  brandName:{
    textAlign:"center",
    fontSize:hp('3.5%'),
    color:COLORS.black,
    fontWeight:"300"
  },
  locationStyle:{
    paddingHorizontal:25,
    justifyContent:"center",
    marginTop:20
  },
  buttonText:{
    color:COLORS.black,
    fontWeight:"bold",
    fontSize:hp('2.7%')
  },
  bottomBorder:{
    borderBottomColor:COLORS.lightOrange,
    borderBottomWidth:2,
    width:"85%",
    alignSelf:"center",
    marginTop:20,
    marginBottom:20
  },
  addCardButtonContainer:{
    backgroundColor:"transparent",
    justifyContent:"flex-start",
    paddingLeft:20
  },
  cardNumber:{
    fontSize: hp('1.8%'),
    color:COLORS.gray1,
    fontWeight:"bold",
  },
  cardTypeStyle: {
    justifyContent:"flex-start",
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
  btnCreate: {
    marginLeft: 15,
    bottom: 10,
    position: 'absolute',
    width: '92%',
    height: 50,
  },
  cardImagContainer: {
    marginTop: hp('2%'),
  },
  cardImage1BG: {backgroundColor: COLORS.blue1},
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
  cardImage:{
    width:"30%",
    height:"30%"
  },
  header:{
    width: wp('95%')
  },
  svgStyle:{
    marginLeft:0
  },
  cardRowStyle:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"green",
    justifyContent:"space-between"
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:15
  },
});
export default AddCards;
