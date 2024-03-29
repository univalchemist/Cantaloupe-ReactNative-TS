import React from 'react';
import {StyleSheet, ScrollView, ViewStyle} from 'react-native';
import {COLORS} from '@theme/color';
import LinearGradient from 'react-native-linear-gradient';

type GradientScrollingWrapperProps = {
  style?: ViewStyle;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  scrollable?: boolean;
};

export const GradientScrollingWrapper = ({
  children,
  style,
  firstColor,
  secondColor,
  thirdColor,
  scrollable = true,
}: React.PropsWithChildren<GradientScrollingWrapperProps>) => {
  return (
    <LinearGradient
      start={{x: 2, y: -1.8}}
      end={{x: 2, y: 3.1}}
      colors={[
        firstColor ? firstColor : COLORS.orange,
        secondColor ? secondColor : COLORS.white,
        thirdColor ? thirdColor : COLORS.blue,
      ]}
      style={[styles.linearGradient, style]}>
      {scrollable ? (
        <ScrollView nestedScrollEnabled style={styles.scrollView}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  scrollView: {flex: 1},
});
