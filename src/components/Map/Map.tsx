import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '@theme/color';
const windowWidth = Dimensions.get('window').width;
import {MAPBOX_ACCESS_TOKEN} from '@env';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

interface MapProps {}
export const Map = ({}: MapProps) => {
  console.log('MAPBOX_ACCESS_TOKEN ', MAPBOX_ACCESS_TOKEN);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView zoomEnabled={true} style={styles.map} />
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
    marginTop: moderateScale(20),
  },
  container: {
    height: '100%',
    width: windowWidth,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: moderateScale(20),
  },
  map: {
    flex: 1,
  },
});
