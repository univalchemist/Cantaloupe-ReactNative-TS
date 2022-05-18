import React, {useState} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '@theme/color';
import {ArrowDown} from '@assets/icon';
import DropDownPicker from 'react-native-dropdown-picker';

interface CardTypeProps {
  onPress?: any;
  style?: ViewStyle;
  items?: any;
  setItems?: any;
}

export const CardAmountDropDown = ({items, setItems}: CardTypeProps) => {
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
      style={styles.dropdown}
      dropDownDirection="BOTTOM"
      ArrowDownIconComponent={() => <ArrowDown />}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 18,
    borderColor: COLORS.gray2,
    borderWidth: 1.5,
    height: 60,
  },
  label: {
    fontSize: 22,
  },
});
