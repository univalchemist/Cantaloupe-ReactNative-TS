import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface IAutoReloadProps {
  onPress?: () => void;
  style?: ViewStyle;
  balance?: string;
}

export const AutoReload = ({balance, style, onPress}: IAutoReloadProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.CardTypeContainer, style]}>
      <View style={styles.autoReloadTxtCont}>
        <Text style={styles.autoReloadTxt}>Auto Reload</Text>
        <Text style={styles.activeTxt}>Active</Text>
      </View>
      <View style={styles.balanceCont}>
        <Text style={styles.balance}>${balance}</Text>
        <View style={styles.balanceTxtCont}>
          <Text style={styles.fallsBlnc}>When Balance Falls</Text>
          <Text style={styles.fallsBlnc}>Below $5</Text>
        </View>
        <View style={styles.rightTitle}>
          <RightArrow width={wp('4%')} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: COLORS.primaryGray,
    borderWidth: hp('0.05%'),
    borderRadius: hp('0.8'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.8%'),
  },
  autoReloadTxtCont: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  autoReloadTxt: {
    fontWeight: '600',
    fontSize: hp('2.5%'),
    color: COLORS.black,
    flex: 1,
  },

  activeTxt: {
    fontWeight: '500',
    fontSize: hp('2.1%'),
    color: COLORS.greenDark,
  },
  balanceCont: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2.4%'),
    justifyContent: 'space-between',
  },
  balanceTxtCont: {flex: 1, marginLeft: 10},
  balance: {
    fontWeight: '500',
    fontSize: hp('3.3%'),
    color: COLORS.orange,
  },
  fallsBlnc: {
    fontSize: hp('1.65%'),
    color: COLORS.gray,
  },

  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
