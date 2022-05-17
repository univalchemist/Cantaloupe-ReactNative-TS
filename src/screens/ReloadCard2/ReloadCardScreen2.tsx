import React, {useState} from 'react';
import {Alert, StyleSheet, View, Text, TextInput} from 'react-native';
import {ReloadCardScreenProp2} from '../../navigation/MainNavigator';
import {COLORS} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrpper';
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
    <GradientScrollingWrapper thirdColor="#fff">
      <Header onPressRight={() => Alert.alert('Go to profile screen')} />
      {!reloadDone ? (
        <View style={styles.container}>
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

          <Typography style={styles.reloadWithTxt}>Security Code:</Typography>

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
        <ReloadCardDone />
      )}

      {/* <View style={styles.separatorCont}>
          <View style={[styles.separator]} />
        </View> */}
    </GradientScrollingWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
    height: '85%',
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
  reloadWithTxt: {
    fontFamily: 'Rubik',
    color: COLORS.black,
    fontWeight: '300',
    fontSize: 20,
    marginVertical: 20,
    fontStyle: 'normal',
  },
  separatorCont: {
    position: 'absolute',
    bottom: '-7%',
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
    height: '12%',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 24,
  },
  reloadBtn: {
    width: '100%',
    height: 30,
    marginTop: 20,
  },
});
export default ReloadCardScreen2;
