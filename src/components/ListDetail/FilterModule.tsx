import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@theme/color';
import React, { useCallback, useEffect, useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { dummyArray, dummyLocation } from '../../screens/mock';

interface ListProps {
  isEnabled: boolean
}

export const FilterModule = ({ isEnabled }: ListProps) => {
  const [selectedItem, setSelectedItem] = useState(dummyArray);


  useEffect(() => {
    selectedItem.forEach(function (e) {
      console.log("eAfter" + JSON.stringify(e))
    })
  }, [])
  const methodToSelectLocation = useCallback((index: number, selectedItem: dummyLocation[]) => {
    var item1: (any) = selectedItem[index]
    var newItem: (dummyLocation)
    var new_array: (dummyLocation[]) = selectedItem.map(function (e: dummyLocation) {
      return {
        id: e.id,
        image: e.image,
        selectedImage: e.selectedImage,
        title: e.title,
        isSelected: e.isSelected
      }
    })
    if (item1.isSelected == true) {
      newItem = {
        id: item1.id,
        image: item1.image,
        selectedImage: item1.selectedImage,
        title: item1.title,
        isSelected: false
      }
    } else {
      newItem = {
        id: item1.id,
        image: item1.image,
        selectedImage: item1.selectedImage,
        title: item1.title,
        isSelected: true
      }
    }
    new_array[index] = newItem
    new_array.forEach(function (e) {
      console.log("eAfter" + JSON.stringify(e))
    })
    setSelectedItem(new_array)
  }, [])


  return <View style={[styles.filterPropContainer, !isEnabled && { marginHorizontal: moderateScale(15) }]}>
    {selectedItem.map((item, index) => {
      return <View style={styles.filterView}>
        <TouchableOpacity onPress={() => methodToSelectLocation(index, selectedItem)}>
          {item.isSelected === true  ? <item.selectedImage /> : <item.image width={moderateScale(20)} height={moderateScale(20)} />}
        </TouchableOpacity>
        <Text style={styles.foodVending}>
          {item.title}
        </Text>
      </View>
    })}
    <TouchableOpacity style={styles.deselectButton} onPress={() => { }}>
      <Text style={styles.deselectText}>Deselect All</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  filterPropContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    zIndex: 2,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    overflow: "hidden",
    padding: moderateScale(15),
    top: moderateScale(195),
    alignSelf: "center",


  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(8),
    width: "50%",
    borderBottomLeftRadius: moderateScale(8),
    zIndex: 1,

  },

  foodVending: {
    fontSize: moderateScale(11),
    color: COLORS.black,
    marginLeft: moderateScale(5)
  },
  deselectButton: {
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
    borderColor: COLORS.orange,
    borderWidth: moderateScale(3),
    paddingHorizontal: moderateScale(35),
    paddingVertical: moderateScale(0),
    borderRadius: moderateScale(20),
  },
  deselectText: {
    color: COLORS.black
  }
});
