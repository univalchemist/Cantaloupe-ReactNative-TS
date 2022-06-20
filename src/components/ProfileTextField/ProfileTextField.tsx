import {
  Alert,
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Typography} from '../Typography';
import {COLORS} from '@theme/color';
import {EditIcon} from '@assets/icon/index';

interface ProfileTextFieldProps {
  title: string;
  startingValue?: string;
  shouldPreventEdit?: boolean;
  showChangeButton?: boolean;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  onTextChange?: (text: string) => void;
  validate?: (text: string) => void;
  isValidated?: boolean;
}
export const ProfileTextField = ({
  title,
  startingValue,
  shouldPreventEdit,
  showChangeButton,
  titleStyle,
  viewStyle,
  containerStyle,
  onTextChange,
  validate,
}: //  isValidated,
ProfileTextFieldProps) => {
  const [value, setValue] = useState(startingValue);
  const moveText = useRef(new Animated.Value(startingValue?.length > 0 ? 1 : 0)).current;

  useEffect(() => {
    setValue(startingValue);
  }, [startingValue]);

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

  const handlePasswordChange = () => {
    Alert.alert('Go to change pasword');
  }

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {/* The fields need adjusted to match the design. Should be centered before focus, with larger font */}
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Typography style={[styles.title, titleStyle]}>{title}</Typography>
        </Animated.View>
        <View style={styles.textContainer}>
          <TextInput
            autoCapitalize={'none'}
            style={[styles.input, viewStyle, showChangeButton ? styles.passwordWidth : styles.normalWidth]}
            value={value}
            onChangeText={(text: string) => onChangeText(text)}
            editable={!shouldPreventEdit}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            blurOnSubmit
          />
          {showChangeButton &&
            <TouchableOpacity style={styles.changeContainer} onPress={() => handlePasswordChange()}>
              <EditIcon style={styles.icon} />
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
          }
        </View>
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
    marginLeft: 10,
    marginBottom: 0,
    backgroundColor: COLORS.transparent,
    alignSelf: 'flex-start',
    minHeight: 60,
  },
  input: {
    fontSize: 20,
    lineHeight: 24,
    height: 50,
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 5,
    color: COLORS.orange,
    fontWeight: 'bold',
    backgroundColor: COLORS.transparent,
    marginLeft: 10,
    minHeight: 60,
    marginBottom: 0,
  },
  passwordWidth: {
    width: '60%',
  },
  normalWidth: {
    width: '95%',
  },
  animatedStyle: {
    top: 25,
    left: 20,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 0,
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.primaryGray,
    backgroundColor: COLORS.transparent,
    paddingTop: 4,
    marginLeft: -4,
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
    width: '30%',
    paddingTop: 10,
    marginLeft: 20,
  },
  icon: {
   color: 'red',
  },
  change: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    paddingLeft: 5,
    color: COLORS.primaryGray,
    backgroundColor: COLORS.transparent,
  }
});
