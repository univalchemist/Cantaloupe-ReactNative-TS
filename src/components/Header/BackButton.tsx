import { StyleSheet, TouchableOpacity, View, ViewStyle, Text } from 'react-native';
import { COLORS } from '@theme/color';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    Back,
} from '@assets/icon';
import { moderateScale } from 'react-native-size-matters';

interface HeaderProps {
    onPressRight: () => void;
    style?: ViewStyle;
}

export const BackButton = ({ style, onPressRight }: HeaderProps) => {
    return (
        <View style={[styles.headerContainer, style]}>
           <TouchableOpacity onPress={onPressRight} style={styles.backButtonContainer}>
               <Back style={styles.rightArrow} fill={COLORS.gray1}/>
               <Text style={styles.buttonText}>BACK</Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        height: hp('3.5%'),

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('1.2%'),
    },
    rightArrow:{

    },
    backButtonContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    buttonText:{
        fontSize:moderateScale(16),
        marginLeft:moderateScale(8),
        color:COLORS.gray1
    }
    
});
