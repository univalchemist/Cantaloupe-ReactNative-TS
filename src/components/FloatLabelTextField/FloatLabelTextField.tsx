/* eslint-disable react/react-in-jsx-scope */
import {
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Typography} from '../Typography';
import {COLORS} from '@theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface FloatLabelTextFieldProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}
export const FloatLabelTextField = ({
  title,
  titleStyle,
}: FloatLabelTextFieldProps) => {
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (value != '') {
      moveTextTop();
      // eslint-disable-next-line eqeqeq
    } else if (value == '') {
      moveTextBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 2],

    outputRange: [-6, -22],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Typography style={[styles.title, titleStyle]}>{title}</Typography>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={(text: string) => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp('2.35%'),
    backgroundColor: COLORS.white,
    paddingTop: hp('2.95%'),
    paddingBottom: hp('2.15%'),
    paddingHorizontal: wp('1.2%'),

    width: wp('90%'),
    alignSelf: 'center',
    minHeight: hp('7%'),
    shadowColor: COLORS.black,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderRadius: 20,
  },
  input: {
    fontSize: hp('2.2%'),
    height: hp('4%'),
    paddingLeft: wp('0.5%'),
    marginTop: hp('1.4%'),
    color: COLORS.orange,
    width: wp('90%'),
    fontWeight: 'bold',
    borderStartColor: 'red',
  },
  label: {
    color: 'grey',
    fontSize: hp('1.4%'),
    marginTop: hp('2.4%'),
  },
  animatedStyle: {
    top: hp('2%'),
    left: wp('4%'),
    marginBottom: hp('1.5%'),
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
  title: {
    fontWeight: '500',
    fontSize: hp('3%'),
    lineHeight: hp('3.5%'),
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.white,
  },
});
