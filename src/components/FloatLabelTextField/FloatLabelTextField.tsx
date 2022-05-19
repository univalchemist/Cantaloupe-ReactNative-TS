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

interface FloatLabelTextFieldProps {
  title: string;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  validate?: (text: string) => void;
  isValidated?: boolean;
}
export const FloatLabelTextField = ({
  title,
  titleStyle,
  viewStyle,
  validate,
  isValidated,
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
    if (validate) {
      validate(value);
      return;
    } else if (value !== '') {
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
      {/* The below needs replaced with the validation checkmark */}
      {validate && isValidated && (
        <Typography style={[styles.input]}>yay</Typography>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    paddingTop: 25,
    paddingBottom: 18,
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    minHeight: 60,
    shadowColor: COLORS.black,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderRadius: 20,
  },
  input: {
    fontSize: 18,
    height: 30,
    paddingLeft: 5,
    marginTop: 10,
    color: COLORS.orange,
    width: '90%',
    fontWeight: 'bold',
    borderStartColor: 'red',
  },
  label: {
    color: 'grey',
    fontSize: 10,
    marginTop: 20,
  },
  animatedStyle: {
    top: 20,
    left: 15,
    marginBottom: 10,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.white,
  },
});
