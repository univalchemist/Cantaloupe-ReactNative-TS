import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {SwitchComp} from '../Switch';

import {COLORS} from '@theme/color';

interface IAutoReloadProps {
  handleSwitch: (val: boolean) => void;
}

export const AutoReloadSwitch = ({handleSwitch}: IAutoReloadProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
  }, []);

  useEffect(() => {
    handleSwitch(isEnabled);
  }, [isEnabled, handleSwitch]);

  return (
    <View style={styles.CardTypeContainer}>
      <Text style={styles.autoReloadTxt}>Auto Reload</Text>
      <SwitchComp
        toggleColor={COLORS.green}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  autoReloadTxt: {
    fontWeight: '300',
    fontSize: 30,
    color: COLORS.black,
    flex: 1,
  },
});
