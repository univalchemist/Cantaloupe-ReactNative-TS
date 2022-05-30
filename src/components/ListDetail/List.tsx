import React from 'react';
import {StyleSheet, View, ViewStyle, Text, FlatList} from 'react-native';
import {COLORS} from '@theme/color';
import {Direction} from '@assets/icon';
import {moderateScale} from 'react-native-size-matters';
import {placesArray} from '@screens/mock';

interface ListProps {
  onPressRight?: () => void;
  style?: ViewStyle;
}

const _renderItem = (item: any, index: number) => {
  return (
    <View
      style={[
        styles.listContainerView,
        {backgroundColor: index % 2 != 0 ? COLORS.gray2 : COLORS.transparent},
      ]}>
      <item.image />
      <View style={styles.locationText}>
        <Text style={styles.machineText}>{item.machine_type}</Text>
        <Text style={styles.locationTextStyles}>{item.location}</Text>
        <Text style={styles.directionStyle}>{item.distance}</Text>
      </View>
      <View style={styles.directionsView}>
        <Direction />
        <Text style={styles.directionsText}>Directions</Text>
      </View>
    </View>
  );
};

export const ListView = ({}: ListProps) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={placesArray}
        keyExtractor={index => index.toString()}
        renderItem={({item, index}) => _renderItem(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'red',
  },
  locationText: {
    width: '50%',
    justifyContent: 'flex-end',
    paddingLeft: moderateScale(10),
  },
  mainContainer: {
    marginTop: moderateScale(30),
  },
  directionsView: {justifyContent: 'center', alignItems: 'center'},
  directionsText: {
    color: COLORS.blue,
    marginTop: moderateScale(5),
    fontWeight: 'bold',
  },
  flatlist: {
    backgroundColor: COLORS.white,
  },
  machineText: {
    color: COLORS.orange,
  },
  locationTextStyles: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  directionStyle: {
    color: COLORS.black,
  },
});
