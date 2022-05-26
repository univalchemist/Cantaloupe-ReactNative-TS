import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from "react-native";
import { Map } from '@components/Map/Map';
import { GradientScrollingWrapper } from '@components/GradientWrapper';
import { moderateScale } from 'react-native-size-matters';
import { BackButton } from '@components/Header/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '@theme/color';
import { SwitchComp } from '@components/Switch/Switch'
import {Filter} from '@assets/icon';
import { ListView } from '@components/ListDetail';
import { FilterModule } from '@components/ListDetail';
import { CustomSearchBar } from '@components/SearchBar';
import { LocationModal } from '@components/LocationModal';
import { dummyArray } from '../mock';
import { SvgProps } from 'react-native-svg';

const MapScreen = ({navigation}:{navigation:any}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFilterEnable, setIsFilterEnable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredLocationIndex, setFilteredLocationIndex] = useState(-1);
  

  const toggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState)
  }, [])

  useEffect(()=>{
    setModalVisible(true)
  
  },[])

  const methodToShowFilterOptions= useCallback(()=>{
    setIsFilterEnable(!isFilterEnable)
  },[isFilterEnable])

  


  return (
    <GradientScrollingWrapper style={styles.mapBackgroundGradient} scrollable={false}>
      <BackButton onPressRight={() => navigation.goBack()} />
      <View style={styles.searchContainer}><CustomSearchBar /></View>
      <View style={styles.mapRow}>
        <View style={styles.mapAndList}>
          <Text style={[styles.mapButtonText, isEnabled ? { fontWeight: "400" } : { fontWeight: "700" }]}>Map</Text>
          <SwitchComp toggleSwitch={toggleSwitch} isEnabled={isEnabled} />
          <View style={styles.listContainer}>
            <Text style={[styles.mapButtonText, isEnabled ? { fontWeight: "700" } : { fontWeight: "400" }]}>List</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => methodToShowFilterOptions()} style={styles.filterContainer}>
          <Filter />
          <Text style={styles.mapButtonText}>{!isFilterEnable? 'Filter':'Hide'}</Text>
        </TouchableOpacity>
      </View>
      {isFilterEnable && <FilterModule   filteredLocationIndex={filteredLocationIndex} />}
      {!isEnabled?<Map/>:
       <ListView/>}
     {!isEnabled && <Text style={styles.infoText}>Tap a location on the map
        for more information</Text>}
       {modalVisible && <LocationModal  onBlock={()=>{setModalVisible(false)}} OnAllow={()=>{setModalVisible(false)}}/>}
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  mapBackgroundGradient: {
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(10)
  },
  searchContainer:{
    paddingHorizontal: moderateScale(15)
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  mapRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(15)
  },
  map: {
    flex: 1
  },
  mapButtonText: {
    fontSize: moderateScale(20),
    color: COLORS.blue
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  listContainer: {
    paddingRight: moderateScale(20),
  },
  mapAndList: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
    justifyContent: "space-between"
  },
  infoText: {
    fontSize: moderateScale(23),
    textAlign: "center",
    marginTop: moderateScale(15),
    color:COLORS.gray1
  },
  
  
});

export default MapScreen;