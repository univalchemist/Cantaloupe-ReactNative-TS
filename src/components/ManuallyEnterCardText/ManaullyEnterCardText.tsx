import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface ManuallyEnterCardTextProps {
  onPress?: () => void;
}

export const ManuallyEnterCardText = ({
  onPress,
}: ManuallyEnterCardTextProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Typography style={[styles.text]}>
        Or Manually Enter Credit Card
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('3.5%'),
  },
  text: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: COLORS.orange,
  },
});
