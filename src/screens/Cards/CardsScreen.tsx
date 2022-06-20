import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '@theme/color';
import {
  Typography,
  CardImage,
  Header,
  CardType,
  GradientScrollingWrapper,
  Separator,
} from '@components/index';
import {getPaymentMethods} from '@apollo-endpoints/index';
import {PaymentMethod} from '@models/PaymentMethod';
import {AddMoreCard} from '@components/AddMoreCard/AddMoreCard';
import {CardsScreenProp} from '@navigation/TabNavigator';

const CardsScreen = ({}: CardsScreenProp) => {
  const navigation = useNavigation<CardsScreenProp>();

  const [primary, setPrimary] = useState<PaymentMethod>();
  const [cards, setCards] = useState<[PaymentMethod]>();

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    await getPaymentMethods().then(response => {
      if (response && response.length > 0) {
        setCards(response);
        setPrimary(response[0]); // Will primary always be the first or do we need to filter first?
      } else {
        console.log('getPayments responded but had no cards?', {response});
      }
    });
  };

  const handleAddMorePressed = () => {
    navigation.navigate('AddCard');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <GradientScrollingWrapper thirdColor={COLORS.white}>
        <View style={styles.innerContainer}>
          <Header onPressRight={() => goToProfile()} />
          {primary && (
            <>
              <View style={styles.primaryCardContainer}>
                <View style={styles.cardImageContainer}>
                  <Typography style={styles.primaryTxt}>PRIMARY</Typography>
                  <CardImage
                    cardType={primary.cardType}
                    width={Dimensions.get('window').width - 80}
                  />
                  <View style={styles.balanceContainer}>
                    <CardType
                      style={styles.cardTypeStyle}
                      shouldShowLogo={false}
                      card={primary}
                      onPress={() =>
                        navigation.navigate('CardDetail', {card: primary})
                      }
                    />
                  </View>
                </View>
              </View>
              <Separator style={styles.separator} />
            </>
          )}
          {cards &&
            cards.length > 0 &&
            cards.map(card => (
              <View style={styles.cardDetailContainer} key={card.cardId}>
                <CardType
                  style={styles.cardTypeStyle}
                  card={card}
                  onPress={() => navigation.navigate('CardDetail', {card})}
                />
              </View>
            ))}

          {/* 
           move empty logo into card type component  
            
          <CardType
            style={styles.cardTypeStyle}
            CardLogo={<EmptyCardLogo width={100} />}
            cardNumber="Add CPay Card"
            onPress={() => handleCardButtonPressed()}
            InfoIcon={<InfoIcon width={wp('3.8%')} />}
          /> */}
          <AddMoreCard
            onPress={() => {
              handleAddMorePressed();
            }}
          />
          <Separator style={styles.separator} />
        </View>
      </GradientScrollingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {marginHorizontal: 20, marginVertical: 20},
  primaryCardContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  cardImageContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  primaryTxt: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.white,
    position: 'absolute',
    top: -9,
    right: -5,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 100,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  cardDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',

    marginTop: 15,
  },
  cardTypeStyle: {marginTop: 10},
  separator: {marginHorizontal: 0},
});
export default CardsScreen;
