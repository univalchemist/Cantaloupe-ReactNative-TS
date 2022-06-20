import React, {ReactElement, useState} from 'react';
import {useWindowDimensions, StyleSheet, View} from 'react-native';
import SnapCarousel, {Pagination} from 'react-native-snap-carousel';

import {Typography} from '@components/Typography';

interface CarouselProps {
  data: {
    icon: ReactElement;
    title: string;
  }[];
}

export const Carousel = ({data}: CarouselProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <SnapCarousel
        data={data}
        renderItem={({item: {icon, title}}) => (
          <View style={styles.carouselItem}>
            <View style={styles.iconWrapper}>{icon}</View>
            <Typography style={styles.title}>{title}</Typography>
          </View>
        )}
        sliderWidth={windowWidth}
        sliderHeight={windowWidth * 0.67}
        itemWidth={windowWidth}
        // itemHeight={(windowWidth - 40) * 0.67}
        autoplay
        loop
        autoplayInterval={3000}
        inactiveSlideScale={1}
        onSnapToItem={index => setActiveSlide(index)}
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

const CAROUSEL_PAGINATION_DOT_SIZE = 24;
const CAROUSEL_PAGINATION_DOT_INACTIVE_SIZE = 12;

const CAROUSEL_ACTIVE_COLOR = '#FF7F32';
const CAROUSEL_INACTIVE_COLOR = '#C0C6E9';

const styles = StyleSheet.create({
  carouselItem: {
    paddingHorizontal: 0,
    marginBottom: 15,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 27,
    textAlign: 'center',
  },
  paginationContainer: {
    paddingVertical: 0,
    justifyContent: 'center',
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
