import React from 'react';
import { View, StyleSheet, Text,  Image, ViewStyle, Dimensions } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

MapboxGL.setAccessToken(
    "pk.eyJ1IjoiYXBwc2Vzc2l0Y28iLCJhIjoiY2wzazAzbmlqMGVrajNibzdiYW9sdTVidiJ9.2SUCFbwtEgy1g7PhWqFZ_w"
  );

interface MapProps {}

export const Map = ({}: MapProps) => {
  return (
    <View style={styles.page}>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map} />
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        marginTop:moderateScale(20),
        
      },
      container: {
        height: windowHeight/1.55,
        width: windowWidth,
        backgroundColor: "transparent",
        paddingHorizontal:moderateScale(20)
      },
      map: {
        flex: 1
      }
});
