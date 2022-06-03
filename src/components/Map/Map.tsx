import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { COLORS } from '@theme/color';
import { MAPBOX_ACCESS_TOKEN } from '@env';
import { MapPinGreen } from '@assets/icon';

const windowWidth = Dimensions.get('window').width;

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

interface MapProps {}
export const Map = ({}: MapProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView zoomEnabled={true} style={styles.map} >
          <MapboxGL.Camera
            zoomLevel={9}
            centerCoordinate={[-73.970895, 40.723279]}
          />
          <MapboxGL.MarkerView id={'pin-1'} coordinate={[-73.970895, 40.723279]}>
            <MapPinGreen />
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
    marginTop: 20,
  },
  container: {
    height: '100%',
    width: windowWidth,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: 20,
  },
  map: {
    flex: 1,
  },
});
