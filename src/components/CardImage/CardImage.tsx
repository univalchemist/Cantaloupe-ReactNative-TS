import {StyleSheet, View, ViewStyle} from 'react-native';

interface CardImageProps {
  CardImg?: any;
  style?: ViewStyle;
  cardTypeText?: any;
  containerStyle?: any;
}

export const CardImage = ({
  style,
  CardImg,
  containerStyle,
  cardTypeText,
}: CardImageProps) => {
  return (
    <View style={containerStyle}>
      {cardTypeText}
      <View style={[styles.cardImgContainer, style]}>{CardImg}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
});
