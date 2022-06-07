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

interface FloatLabelTextFieldProps {
  title: string;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  onTextChange?: (text: string) => void;
  validate?: (text: string) => void;
  isValidated?: boolean;
}
export const FloatLabelTextField = ({
  title,
  titleStyle,
  viewStyle,
  onTextChange,
  validate,
}: //  isValidated,
FloatLabelTextFieldProps) => {
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;

  const onChangeText = (text: string) => {
    setValue(text);
    if (onTextChange) {
      onTextChange(text);
    }
  };

  const onFocusHandler = () => {
    moveTextTop();
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
    if (validate) {
      validate(value);
      return;
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
    outputRange: [0, -45],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <>
      <View style={styles.container}>
        {/* The fields need adjusted to match the design. Should be centered before focus, with larger font */}
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Typography style={[styles.title, titleStyle]}>{title}</Typography>
        </Animated.View>
        <TextInput
          autoCapitalize={'none'}
          style={[styles.input, viewStyle]}
          value={value}
          onChangeText={(text: string) => onChangeText(text)}
          editable={true}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          blurOnSubmit
        />
      </View>
      {/* The below needs replaced with the validation checkmark or X */}
      {/* {validate && isValidated === true && (
        <Typography style={[styles.input]}>yay</Typography>
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    minHeight: 75,
    shadowColor: COLORS.black,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    borderRadius: 20,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    lineHeight: 24,
    height: 50,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 5,
    color: COLORS.orange,
    fontWeight: 'bold',
    backgroundColor: COLORS.transparent,
    width: '100%',
  },
  animatedStyle: {
    top: 25,
    left: 20,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.transparent,
  },
});
