import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { COLORS } from '@theme/color';
import {
    Direction
} from '@assets/icon';
import { moderateScale } from 'react-native-size-matters';
import { placesArray } from '@screens/mock';

interface ListProps {
    onPressRight?: () => void;
    style?: ViewStyle;
}

export const ListView = ({}: ListProps) => {
    return placesArray.map((item) => {
            return <View style={styles.listContainerView}>
              <item.image />
              <View style={styles.locationText}>
                 <Text>{item.machine_type}</Text>
              <Text>{item.location}</Text>
              <Text>{item.distance}</Text>
              </View>
              <View style={styles.directionsView}>
                 <Direction/>
                 <Text style={styles.directionsText}>Directions</Text>
              </View>
            </View>
          })
};

const styles = StyleSheet.create({
    listContainerView:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        backgroundColor:COLORS.gray2,
        padding:moderateScale(10),
        marginVertical:moderateScale(10),
      },
      locationText:{
        width:"50%",
        justifyContent:"flex-end",
        paddingLeft:moderateScale(10)
      },
      directionsView:{justifyContent:"center", alignItems:"center" },
      directionsText:{
        color:COLORS.blue,
        marginTop:moderateScale(5)
      }
    
});
