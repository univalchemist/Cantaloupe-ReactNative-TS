import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {ReloadCardScreenProp2} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';
import {Header} from '@components/Header';
import {CardImage} from '@components/CardImage/CardImage';
import {Card2, CardImage2} from '@assets/icon';
import {ReloadCardImage} from '@components/ReloadCardImage';
import {Typography} from '@components/Typography';
import {CardDetail} from '@components/CardDetail';
import {Button} from '@components/Button';
import {ReloadCardDone} from '@components/ReloadCardDone';

const ReloadCardScreen2 = ({}: ReloadCardScreenProp2) => {
  const navigation = useNavigation<ReloadCardScreenProp2>();
  const [reloadDone, setReloadDone] = useState(false);

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor="#fff">
        <Header onPressRight={() => setReloadDone(false)} />
        {!reloadDone ? (
          <View style={styles.subContainer}>
            <Typography style={styles.screenTitle}>Reload Card</Typography>
            <ReloadCardImage
              CardLogo={
                <CardImage
                  cardTypeText={
                    <Typography style={styles.primaryTxt}>PRIMARY</Typography>
                  }
                  CardImg={<CardImage2 style={{backgroundColor: '#004890'}} />}
                />
              }
              cardNumber="More Card •• 5743"
              balance="50.00"
            />

            <CardDetail
              CardImg={<Card2 />}
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
              placeholderTextColor={COLORS.gray1}
              editable={false}
            />
            <Button
              title="Relead Card"
              onPress={() => setReloadDone(true)}
              style={styles.reloadBtn}
            />
          </View>
        ) : (
          <ReloadCardDone loadedBalance="50" newBalance="100" />
        )}
      </GradientScrollingWrapper>
      <View style={styles.separatorCont}>
        <View style={[styles.separator]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    paddingHorizontal: 20,
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Rubik',
    marginVertical: 20,
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: 6,
    color: COLORS.white,
    marginLeft: 7,
    position: 'absolute',
    top: -6,
    right: -2,
    backgroundColor: COLORS.blue,
    padding: 3,
    borderRadius: 5,
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
    width: '85%',
  },
  codeInput: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 15,
    paddingHorizontal: 12,
    fontSize: 24,
  },
  reloadBtn: {
    width: '100%',
    height: 30,
    marginTop: 20,
  },
});
export default ReloadCardScreen2;
