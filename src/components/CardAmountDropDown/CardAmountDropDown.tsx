import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  FlatList,
} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';
import {RightArrow} from '@assets/icon';
import DropDownPicker from 'react-native-dropdown-picker';

interface CardTypeProps {
  onPress: any;
  style?: ViewStyle;
  data: [];
}

export const CardAmountDropDown = ({
  style,
  onPress,

  data,
}: CardTypeProps) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [showList, setShowList] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{}}
        containerStyle={{}}
        textStyle={{
          fontSize: 7,
        }}
        zIndex={8000}
      />
      {/* <View style={styles.inputContainer}>
        <Typography style={styles.amountTxt}>${selectedValue}</Typography>
        <View style={styles.rightTitle}>
          <TouchableOpacity onPress={() => setShowList(!showList)}>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
      {showList && (
        <View
          style={{position: 'absolute', zIndex: 100, top: 50, width: '100%'}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `id-${index}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  onPress(item);
                  setSelectedValue(item);
                }}>
                <Typography>{item}</Typography>
              </TouchableOpacity>
            )}
          />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    width: '100%',
    alignSelf: 'center',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: COLORS.gray2,
    borderWidth: 1.5,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  amountTxt: {flex: 1, fontSize: 20},
  cardInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  dropdownItem: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
