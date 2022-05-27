import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@theme/color';
import React, { useCallback, useEffect, useState } from 'react';
import { moderateScale, s } from 'react-native-size-matters';
import { ReactElement } from 'react';
import { dummyArray } from '../../screens/mock';
import { print } from 'graphql';

interface ListProps {
  onIconPress: (item: any, index: number, newValue: any) => void;
  filteredLocationIndex: number;
  data: any;

}


export const FilterModule = ({ }: ListProps) => {
  const [selectedItem, setSelectedItem] = useState(dummyArray);


  useEffect(()=>{


    selectedItem.forEach(function(e) {


      console.log("eAfter" + JSON.stringify(e))


        })




  },[])


  const methodToSelectLocation = useCallback((index: number,selectedItem:[]) => {
    //setFilteredLocationIndex(index)
console.log("onPress");
    var item1: (any) = selectedItem[index]



    var newItem = {}



  var new_array = selectedItem.map(function(e) {

return {
  id: e.id,
  image: e.image,
  selectedImage: e.selectedImage,
  title: e.title,
  isSelected: e.isSelected
}

  })


console.log("seletedItem" + JSON.stringify(item1))





    if (item1.isSelected == true) {

      console.log("seletedItemTrue" + item1.isSelected)
      newItem = {
        id: item1.id,
        image: item1.image,
        selectedImage: item1.selectedImage,
        title: item1.title,
        isSelected: false
      }

    } else {

      console.log("seletedItemFalse" + item1.isSelected)

      newItem = {
        id: item1.id,
        image: item1.image,
        selectedImage: item1.selectedImage,
        title: item1.title,
        isSelected: true
      }

    }







    console.log("abc1" + JSON.stringify(newItem))

    console.log("index" + index)


    // var itemList: {
    //   id: number, image: React.FC<SvgProps>,
    //   selectedImage: React.FC<SvgProps>,
    //   title: String,
    //   isSelected: boolean
    // }[] = [];

    // itemList.push(...selectedItem)



    new_array[index] = newItem


    new_array.forEach(function(e) {


      console.log("eAfter" + JSON.stringify(e))


        })





    setSelectedItem(new_array)



    //setSelectedItem(item)


    // setTimeout(() => {

    //   console.log("afterChangeTimeOut"+JSON.stringify(selectedItem))

    // }, 100);
  }, [])





  return <View style={styles.filterPropContainer}>

{console.log("afterChangeQwe" + JSON.stringify(selectedItem))}


    {selectedItem.map((item, index,) => {
      return <View style={styles.filterView}>
        <TouchableOpacity onPress={() => methodToSelectLocation(index,selectedItem)}>
          {item.isSelected === true ? <item.selectedImage /> : <item.image width={moderateScale(20)} height={moderateScale(20)} />}
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
    zIndex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    overflow: "hidden",
    padding: moderateScale(15),
    top: "28%",
    alignSelf: "center"
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(8),
    width: "50%",
    borderBottomLeftRadius: moderateScale(8),
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
