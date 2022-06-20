import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Typography} from '../Typography';

import {COLORS} from '@theme/color';
import {ClearField, TickIcon} from '@assets/icon';

interface FloatLabelTextFieldProps {
  title: string;
  startingValue?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  onTextChange?: (text: string) => void;
  validate?: (text: string) => void;
  isValidated?: boolean;
  clearButton?: boolean;
  shouldPreventEdit?: boolean;
}
export const FloatLabelTextField = ({
  title,
  startingValue,
  titleStyle,
  viewStyle,
  containerStyle,
  onTextChange,
  validate,
  clearButton,
  shouldPreventEdit,
}: //  isValidated,
FloatLabelTextFieldProps) => {
  const [value, setValue] = useState(startingValue);
  const moveText = useRef(new Animated.Value(startingValue && startingValue.length > 0 ? 1 : 0)).current;

  useEffect(() => {
    setValue(startingValue);
  }, [startingValue]);

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

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
      <View style={[styles.container, containerStyle]}>
        {/* The fields need adjusted to match the design. Should be centered before focus, with larger font */}
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Typography style={[styles.title, titleStyle]}>{title}</Typography>
        </Animated.View>
        <TextInput
          autoCapitalize={'none'}
          style={[styles.input, viewStyle]}
          value={value}
          onChangeText={(text: string) => onChangeText(text)}
          editable={!shouldPreventEdit}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          blurOnSubmit
        />

        <View style={styles.iconContainer}>
          {validate ? (
            <TickIcon height={30} width={30} />
          ) : (
            clearButton && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => {
                  onChangeText('');
                }}>
                <ClearField width={44} />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingLeft: 35,
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
    paddingTop: 10,
    paddingBottom: 5,
    marginRight: 60,
    color: COLORS.orange,
    fontWeight: 'bold',
    backgroundColor: COLORS.transparent,
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: 22,
    right: 10,
    width: 44,
    height: 44,
  },
  clearButton: {width: 44, height: 44},
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
