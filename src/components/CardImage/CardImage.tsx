import {StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '@components/Typography';
import {COLORS} from '@theme/color';

interface CardImageProps {
  CardImg: any;
  style?: ViewStyle;
}

export const CardImage = ({style, CardImg}: CardImageProps) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.primaryTxt}>PRIMARY</Typography>
      <View style={[styles.cardImgContainer, style]}>{CardImg}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  cardImgContainer: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },

  primaryTxt: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 7,
    position: 'absolute',
    top: -2,
    right: 45,
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden',
    fontFamily: 'Rubik',
    zIndex: 10,
  },
});
