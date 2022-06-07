import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {ReloadCardScreenProp2} from '../../navigation/TabNavigator';
import {COLORS} from '@theme/color';
// import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {Card2, CardImage2} from '@assets/icon';
import {ReloadCardImage} from '@components/ReloadCardImage';
import {Typography} from '@components/Typography';
import {CardDetail} from '@components/CardDetail';
import {Button} from '@components/Button';
import {ReloadCardDone} from '@components/ReloadCardDone';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ReloadCardScreen2 = ({}: ReloadCardScreenProp2) => {
  // const navigation = useNavigation<ReloadCardScreenProp2>();
  const [reloadDone, setReloadDone] = useState(false);

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <Header onPressRight={() => setReloadDone(false)} />
        <View style={styles.subContainer}>
          {!reloadDone ? (
            <View>
              <Typography style={styles.screenTitle}>Reload Card</Typography>
              <ReloadCardImage
                CardLogo={
                  <CardImage
                    cardTypeText={
                      <Typography style={styles.primaryTxt}>PRIMARY</Typography>
                    }
                    CardImg={
                      <CardImage2 style={{backgroundColor: COLORS.blueDark}} />
                    }
                  />
                }
                cardNumber="More Card •• 5743"
                balance="50.00"
              />

              <CardDetail
                CardImg={<Card2 width={wp('16%')} />}
                amount="50.00"
                cardNumber="•• 2058"
                name="John Petterson"
                street="1st• street"
                city="New York, NY 10001"
              />

              <Typography style={styles.securityTxt}>Security Code:</Typography>

              <TextInput
                style={styles.codeInput}
                placeholder="CVV"
                placeholderTextColor={COLORS.gray}
                editable={false}
              />
              <Button
                title="Reload Card"
                onPress={() => setReloadDone(true)}
                style={styles.reloadBtn}
              />
            </View>
          ) : (
            <ReloadCardDone loadedBalance="50" newBalance="100" />
          )}
        </View>
      </GradientScrollingWrapper>
      <View style={styles.separator} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  subContainer: {
    paddingHorizontal: wp('5%'),
  },

  screenTitle: {
    fontSize: hp('3.8%'),
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginVertical: hp('2.3%'),
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: hp('0.7%'),
    color: COLORS.white,
    position: 'absolute',
    top: hp('-1'),
    right: wp('-0.5'),
    backgroundColor: COLORS.blue,
    padding: hp('0.4%'),
    borderRadius: hp('0.6%'),
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
  securityTxt: {
    fontFamily: 'Rubik',
    color: COLORS.black,
    fontWeight: '300',
    fontSize: 18,
    marginVertical: 15,
    fontStyle: 'normal',
  },
  separatorCont: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  separator: {
    backgroundColor: COLORS.lightOrange,
    height: 2,
    width: wp('85%'),
    alignSelf: 'center',
    marginBottom: hp('2%'),
  },
  codeInput: {
    width: wp('90%'),
    height: hp('7%'),
    borderWidth: hp('0.15%'),
    borderColor: COLORS.grayLight,
    borderRadius: 15,
    paddingHorizontal: wp('3%'),
    fontSize: hp('3%'),
  },
  reloadBtn: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('2.5%'),
    minHeight: hp('8%'),
  },
});
export default ReloadCardScreen2;
