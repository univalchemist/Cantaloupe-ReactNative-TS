import { StyleSheet, TextStyle, TouchableOpacity, useWindowDimensions, ViewStyle } from "react-native";
import { Typography } from "@components/Typography";
import { COLORS } from "@theme/color";
import { ReactElement } from "react";
import LinearGradient from 'react-native-linear-gradient';

interface IContainerProps {
  children: ReactElement
}
export const Container = ({ children }: IContainerProps) => {
  const { height } = useWindowDimensions();
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={[styles.container, { height }]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    position: "absolute"
  }
});