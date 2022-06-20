import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {COLORS} from '@theme/color';
import {MapPinGreen} from '@assets/icon';
const windowWidth = Dimensions.get('window').width;

interface MapProps {}
// eslint-disable-next-line no-empty-pattern
export const Map = ({}: MapProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
              <MapPinGreen />
            </Marker>
          </MapView>
        </View>
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
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    flex: 1,
  },
});
