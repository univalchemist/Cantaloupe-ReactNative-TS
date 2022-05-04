import {StyleSheet, ScrollView, ViewStyle} from 'react-native';
import {COLORS} from '@theme/color';
import LinearGradient from 'react-native-linear-gradient';

type GridentWrapperProps = {
  style?: ViewStyle,
  firstColor?: string,
  secondColor?: string,
  thirdColor?: string,
  scrollable?: boolean
}

export const GradientWrapper = ({
  children,
  style,
  firstColor,
  secondColor,
  thirdColor,
  scrollable = false,
}: React.PropsWithChildren<GridentWrapperProps>) => {
  return (
    <LinearGradient
      start={{x: 2, y: -1.8}}
      end={{x: 2, y: 3.1}}
      colors={[
        firstColor ? firstColor : COLORS.orange,
        secondColor ? secondColor : '#fff',
        thirdColor ? thirdColor : COLORS.blue,
      ]}
      style={[styles.linearGradient, style]}>
      {scrollable ?<ScrollView style={{ flex: 1 }}>
        {children}
      </ScrollView> : children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
