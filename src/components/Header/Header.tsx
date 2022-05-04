import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {ProfileIcon, LogoMoreSmall} from '@assets/icon';

interface HeaderProps {
  onPressRight: () => void;
  style?: ViewStyle;
}

export const Header = ({style, onPressRight}: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <LogoMoreSmall />
      <TouchableOpacity onPress={onPressRight} style={styles.rightTitle}>
        <ProfileIcon />
        <Typography style={styles.profileTxt}>Profile</Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTxt: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.orange,
    marginLeft: 7,
  },
});
