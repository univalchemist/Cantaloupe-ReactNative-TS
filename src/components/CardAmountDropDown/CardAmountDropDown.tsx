import React, {useState} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '@theme/color';
import {ArrowDown} from '@assets/icon';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface CardTypeProps {
  onPress?: any;
  style?: ViewStyle;
  items?: any;
  setItems?: any;
}

export const CardAmountDropDown = ({items, setItems, style}: CardTypeProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{}}
      placeholder="$0"
      placeholderStyle={{
        color: COLORS.primaryGray,
      }}
      textStyle={styles.label}
      style={[styles.dropdown, style]}
      dropDownDirection="BOTTOM"
      ArrowDownIconComponent={() => <ArrowDown width={wp('8%')} />}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: hp('2%'),
    borderColor: COLORS.grayLight,
    borderWidth: hp('0.1%'),
    height: hp('7%'),
  },
  label: {
    fontSize: hp('2.7%'),
    color: COLORS.grayDark,
  },
});
