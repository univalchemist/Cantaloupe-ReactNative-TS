import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {CardRightArrow, SelectedCircle, UnSelectedCircle} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ChooseCardProps {
  CardTypeIcon?: any;
  CardIcon?: any;
  cardsList?: [];
  handleSelectedCard?: (...args: any[]) => any;
  addNewCard?: () => void;
}

export const ChooseCard = ({
  CardTypeIcon,
  CardIcon,
  cardsList,
  handleSelectedCard,
  addNewCard,
}: ChooseCardProps) => {
  const [list, setList] = useState(cardsList);

  useEffect(() => {
    addSelectionOption();
  }, []);

  const addSelectionOption = () => {
    const listHolder = [...list];
    for (let i = 0; i < listHolder.length; i++) {
      listHolder[i].selected = false;
    }
    setList(listHolder);
  };
  const handleSelectCard = (index: any) => {
    const listHolder = [...list];
    for (let i = 0; i < listHolder.length; i++) {
      if (listHolder[i].selected) {
        listHolder[i].selected = false;
        break;
      }
    }
    listHolder[index].selected = true;
    handleSelectedCard(listHolder[index]);
    setList(listHolder);
  };

  const renderItem = ({item, index}) => (
    <View>
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => handleSelectCard(index)}>
          {item.selected ? <SelectedCircle /> : <UnSelectedCircle />}
        </TouchableOpacity>
        <View>{item.CardLogo}</View>
        <View style={styles.cardInfoContainer}>
          <Typography style={styles.cardName}>{item.cardName}</Typography>
          <View style={styles.emptyCardContainer}>
            <Typography style={styles.cardNumber}>{item.cardNumber}</Typography>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topCardIconsCont}>
        <CardRightArrow width={wp('6.5%')} />
        <Typography> {' | '}</Typography>
        {CardTypeIcon}
        {CardIcon}
      </View>
      <FlatList
        data={list}
        keyExtractor={(e, i) => `id-${i}`}
        renderItem={renderItem}
        ListFooterComponent={() => {
          return (
            <TouchableOpacity
              style={styles.addNewContainer}
              onPress={addNewCard}>
              <Text style={styles.addNewCardTxt}>+ Add a New card</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    alignSelf: 'center',
    borderWidth: hp('0.05%'),
    borderColor: COLORS.primaryGray,
    borderRadius: hp('0.5%'),
    padding: hp('2%'),
  },
  topCardIconsCont: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
    alignItems: 'center',
  },
  cardInfoContainer: {
    marginLeft: wp('1.8%'),
    flex: 1,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardName: {
    fontWeight: '500',
    fontSize: hp('2%'),
    color: COLORS.black,
    marginLeft: wp('1.7%'),
  },
  cardNumber: {
    fontWeight: '600',
    fontSize: hp('1.9%'),
    color: COLORS.primaryGray,
    marginLeft: wp('1.7%'),
    marginTop: 2,
    marginRight: wp('1.9%'),
  },
  emptyCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: 0.4,
    backgroundColor: COLORS.primaryGray,
    alignSelf: 'center',
  },
  addNewContainer: {
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
  },
  addNewCardTxt: {
    fontSize: hp('2%'),
  },
});
