import { StyleSheet, View, ViewStyle, Text, FlatList, Alert } from 'react-native';
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
            return <View style={styles.mainContainer}>
              <FlatList
              key={'list'}
              style={styles.flatlist}
              data={placesArray}
              maxToRenderPerBatch={2}
              initialNumToRender={2}
              windowSize={2}
              renderItem={(item:any, index:number)=>{
                return   <View style={[styles.listContainerView, {backgroundColor:index % 2 === 0 ? COLORS.orange:COLORS.white}]}>
                <item.item.image />
                <View style={styles.locationText}>
                   <Text style={styles.machineText}>{item.item.machine_type}</Text>
                <Text style={styles.locationTextStyles}>{item.item.location}</Text>
                <Text style={styles.directionStyle}>{item.item.distance}</Text>
                </View>
                <View style={styles.directionsView}>
                   <Direction/>
                   <Text style={styles.directionsText}>Directions</Text>
                </View>
              </View>
              }}/>
            </View>
};

const styles = StyleSheet.create({
    listContainerView:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        paddingVertical:moderateScale(10),
        marginVertical:moderateScale(10),
        paddingHorizontal:moderateScale(20)
      },
      locationText:{
        width:"50%",
        justifyContent:"flex-end",
        paddingLeft:moderateScale(10),
        
      },
      mainContainer:{
        marginTop:moderateScale(30)
      },
      directionsView:{justifyContent:"center", alignItems:"center" },
      directionsText:{
        color:COLORS.blue,
        marginTop:moderateScale(5),
        fontWeight:"bold"
      },
      flatlist:{
        backgroundColor:COLORS.white
      },
      machineText:{
        color:COLORS.orange
      },
      locationTextStyles:{
        color:COLORS.black,
        fontWeight:"bold"
      },
      directionStyle:{
        color:COLORS.black
      }
    
});
