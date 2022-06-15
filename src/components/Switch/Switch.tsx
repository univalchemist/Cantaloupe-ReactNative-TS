import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/color';
import {moderateScale} from 'react-native-size-matters';
import ToggleSwitch from 'toggle-switch-react-native';

interface SwitchProps {
  toggleSwitch: () => void;
  isEnabled: boolean;
  toggleColor?: string;
}

export const SwitchComp = ({
  toggleSwitch,
  isEnabled,
  toggleColor,
}: SwitchProps) => {
  return (
    <ToggleSwitch
      isOn={isEnabled ? true : false}
      onColor={toggleColor ? toggleColor : COLORS.lightBlue}
      offColor={COLORS.lightBlue}
      size="small"
      onToggle={toggleSwitch}
      thumbOffStyle={[styles.tumb, {position: 'absolute', left: -5}]}
      thumbOnStyle={styles.tumb}
      trackOffStyle={styles.tumb}
      trackOnStyle={styles.tumb}
    />
  );
};

const styles = StyleSheet.create({
  switchStyle: {
    width: '20%',
  },
  tumb: {
    minWidth: moderateScale(24),
    minHeight: moderateScale(24),
    borderRadius: moderateScale(24) / 2,
  },
  toggleContainer: {
    backgroundColor: 'red',
  },
});
