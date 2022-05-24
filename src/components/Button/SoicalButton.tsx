import React, {ReactElement} from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  useWindowDimensions,
  TouchableHighlight,
} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface IButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  icon: ReactElement;
}
export const SocialButton = ({
  title,
  onPress,
  style,
  titleStyle,
  icon,
}: IButtonProps) => {
  const {width: windowWidth} = useWindowDimensions();
  return (
    <TouchableHighlight
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: windowWidth - 40, borderRadius: 5, marginBottom: 10}}
      activeOpacity={0.6}>
      <View style={[styles.container, style]}>
        <View style={styles.icon}>{icon}</View>
        <Typography style={[styles.title, titleStyle]}>{title}</Typography>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "center",
    paddingLeft: 20,
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: COLORS.darkGray,
  },
});
