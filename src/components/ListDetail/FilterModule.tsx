import { StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@theme/color';
import {
    Direction
} from '@assets/icon';
import { moderateScale } from 'react-native-size-matters';
import { dummyArray, placesArray } from '@screens/mock';

interface ListProps {
    onPressRight?: () => void;
    style?: ViewStyle;
}

export const FilterModule = ({}: ListProps) => {
    return<View style={styles.filterPropContainer}>
    {dummyArray.map((item) => {
      return <View style={styles.filterView}>
        <TouchableOpacity onPress={() => { }}>
          <item.image width={moderateScale(20)} height={moderateScale(20)} />
        </TouchableOpacity>
        <Text style={styles.foodVending}>
          {item.title}
        </Text>
      </View>
    })}
    <TouchableOpacity style={styles.deselectButton}>
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
        top: "29%",
        alignSelf:"center"
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
