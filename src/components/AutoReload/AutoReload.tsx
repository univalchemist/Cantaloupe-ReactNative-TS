import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';

interface AutoReload {
  onPress: () => void;

  style?: ViewStyle;
  balance?: string;
}

export const AutoReload = ({
  balance,

  style,
  onPress,
}: AutoReload) => {
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
          <RightArrow />
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
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 20,
    width: '75%',
  },
  autoReloadTxtCont: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  autoReloadTxt: {
    fontWeight: '600',
    fontSize: 22,
    color: COLORS.black,
    flex: 1,
  },

  activeTxt: {
    fontWeight: '500',
    fontSize: 18,
    color: COLORS.green,
  },
  balanceCont: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  balanceTxtCont: {flex: 1, marginLeft: 10},
  balance: {
    fontWeight: '500',
    fontSize: 28,
    color: COLORS.orange,
  },
  fallsBlnc: {
    fontSize: 14,
    color: COLORS.gray1,
  },

  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
