import React from 'react';
import { View, StyleSheet, Text,  Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
    "pk.eyJ1IjoiYXBwc2Vzc2l0Y28iLCJhIjoiY2wzazAzbmlqMGVrajNibzdiYW9sdTVidiJ9.2SUCFbwtEgy1g7PhWqFZ_w"
  );
  


const MapScreen = () => {


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
      backgroundColor: "#F5FCFF"
    },
    container: {
      height: 300,
      width: 300,
      backgroundColor: "tomato"
    },
    map: {
      flex: 1
    }
  });

  export default MapScreen;