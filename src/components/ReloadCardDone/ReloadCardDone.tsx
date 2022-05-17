import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface ReloadCardDoneProps {
  CardLogo: any;
  cardNumber: string;
  style?: ViewStyle;
  balance?: string;
}

export const ReloadCardDone = ({
  CardLogo,
  balance,
  cardNumber,
  style,
}: ReloadCardDoneProps) => {
  return (
    <View style={[styles.CardTypeContainer, style]}>
      <Typography style={styles.doneTxt}>Done</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  CardTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
  },

  doneTxt: {
    fontWeight: '400',
    fontSize: 28,
    color: COLORS.orange,
    flex: 1,
  },
});
