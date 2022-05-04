import {StyleSheet, View} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface TabIconProps {
  Icon: any;
  label: string;
  active: boolean;
}

export const BottomTabIcon = ({Icon, label, active}: TabIconProps) => {
  return (
    <View style={styles.tabIconContainer}>
      <Icon fill={active ? COLORS.blue : COLORS.orange} />
      <Typography
        style={[
          styles.primaryTxt,
          {color: active ? COLORS.blue : COLORS.orange},
        ]}>
        {label}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
  },

  primaryTxt: {
    fontWeight: '800',
    fontSize: 18,
  },
});
