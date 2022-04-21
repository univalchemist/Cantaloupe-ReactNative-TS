import { Typography } from "@components/Typography";
import React, { ReactElement, useState } from "react";
import { useWindowDimensions, StyleSheet, View } from "react-native";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";
interface CarouselProps {
  data: {
    icon: ReactElement;
    title: string;
  }[];
}

export const Carousel = ({ data }: CarouselProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <SnapCarousel
        data={data}
        renderItem={({ item: { icon, title } }) => (
          <View style={styles.carouselItem}>
            <View style={styles.iconWrapper}>{icon}</View>
            <Typography style={styles.title}>{title}</Typography>
          </View>
        )}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        autoplay
        loop
        autoplayInterval={6000}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.paginationDotsContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const CAROUSEL_ITEM_HEIGHT = 240;
const CAROUSEL_PAGINATION_DOT_SIZE = 20;
const CAROUSEL_PAGINATION_DOT_INACTIVE_SIZE = 12;

const CAROUSEL_ACTIVE_COLOR = "#FF7F32";
const CAROUSEL_INACTIVE_COLOR = "#C0C6E9";

const styles = StyleSheet.create({
  carouselItem: {
    minHeight: CAROUSEL_ITEM_HEIGHT,
    paddingHorizontal: 20,
  },
  iconWrapper: {
    alignItems: "center"
  },
  title: {
    fontWeight: "300",
    fontSize: 27,
    lineHeight: 32,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  paginationContainer: {
    marginTop: 40,
    paddingVertical: 0,
    justifyContent: "center",
  },
  paginationDotsContainer: {
    marginRight: 8,
    marginLeft: 0,
  },
  paginationDot: {
    width: CAROUSEL_PAGINATION_DOT_SIZE,
    height: CAROUSEL_PAGINATION_DOT_SIZE,
    borderRadius: CAROUSEL_PAGINATION_DOT_SIZE / 2,
    backgroundColor: CAROUSEL_ACTIVE_COLOR,
  },
  paginationDotInactive: {
    backgroundColor: CAROUSEL_INACTIVE_COLOR,
    width: CAROUSEL_PAGINATION_DOT_INACTIVE_SIZE,
    height: CAROUSEL_PAGINATION_DOT_INACTIVE_SIZE,
    borderRadius: CAROUSEL_PAGINATION_DOT_INACTIVE_SIZE / 2,
  },
});
