import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {dummyArray} from '../../screens/mock';

import {ListViewProp, LocationProp} from './type';

import {COLORS} from '@theme/color';

export const FilterModule = ({isEnabled}: ListViewProp) => {
  const [selectedItem, setSelectedItem] = useState(dummyArray);

  const methodToSelectLocation = useCallback(
    (index: number, item: LocationProp[]) => {
      const item1: LocationProp = item[index];
      const new_array = [...item];
      const newItem: LocationProp = {
        id: item1.id,
        image: item1.image,
        selectedImage: item1.selectedImage,
        title: item1.title,
        isSelected: !item1.isSelected,
        color: item1.color,
      };
      new_array[index] = newItem;
      setSelectedItem(new_array);
    },
    [],
  );

  const handleUnselectClick = useCallback(() => {
    const newArray = selectedItem.map(item => ({
      ...item,
      isSelected: false,
    }));
    setSelectedItem(newArray);
  }, [selectedItem]);

  return (
    <View
      style={[
        styles.filterPropContainer,
        !isEnabled && {marginHorizontal: 15},
      ]}>
      {selectedItem.map((item, index) => {
        return (
          <View key={item.id} style={styles.filterView}>
            <TouchableOpacity
              onPress={() => methodToSelectLocation(index, selectedItem)}>
              {item.isSelected === true ? (
                <item.selectedImage
                  width={wp('5%')}
                  height={hp('3%')}
                  fill={item.color}
                />
              ) : (
                <item.image
                  width={wp('5%')}
                  height={hp('3%')}
                  fill={item.color}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.foodVending}>{item.title}</Text>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.deselectButton}
        onPress={() => {
          handleUnselectClick();
        }}>
        <Text style={styles.deselectText}>Deselect All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterPropContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    zIndex: 2,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden',
    padding: 15,
    top: moderateScale(120, 0.5),
    alignSelf: 'center',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: '50%',
    borderBottomLeftRadius: 8,
    zIndex: 1,
  },
  foodVending: {
    fontSize: 11,
    color: COLORS.black,
    marginLeft: wp('1%'),
  },
  deselectButton: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: COLORS.orange,
    borderWidth: 3,
    paddingHorizontal: wp('5%'),
    paddingVertical: 0,
    borderRadius: 20,
  },
  deselectText: {
    color: COLORS.black,
  },
});
