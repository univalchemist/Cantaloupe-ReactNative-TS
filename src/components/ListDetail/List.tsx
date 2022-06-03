import {StyleSheet, View, ViewStyle, Text, FlatList} from 'react-native';
import {COLORS} from '@theme/color';
import {Direction} from '@assets/icon';
import {moderateScale} from 'react-native-size-matters';
import {placesArray} from '@screens/mock';
import { PlaceProp, ListViewProp } from './type';

const _renderItem = (item: PlaceProp, index: number) => {
  return (
    <View
      key={item.location}
      style={[
        styles.listContainerView,
        {backgroundColor: index % 2 != 0 ? COLORS.grayLight : COLORS.transparent},
      ]}>
      <View style={styles.image}>
        <item.image width={moderateScale(90)} height={moderateScale(67)} />
      </View>
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

export const ListView = ({}: ListViewProp) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        data={placesArray}
        keyExtractor={(item, index) => index.toString()}
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
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  locationText: {
    width: '50%',
    justifyContent: 'flex-end',
    paddingLeft: 10,
  },
  image: {
    borderRadius: 5,
  },
  mainContainer: {
    marginTop: 30,
    flex: 1,
  },
  directionsView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionsText: {
    color: COLORS.blue,
    marginTop: 5,
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
