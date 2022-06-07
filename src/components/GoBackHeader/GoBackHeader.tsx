import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '@components/index';
import {COLORS} from '@theme/color';
import {BackArrow} from '@assets/icon';

type Props = {
  label: string;
  //backMethod: 'back' | 'close';
  headerState: 'addCard';
  onPress: () => void;
};

//  Designed to be a top tier element on screen as it's backgrounds needs to extend to unsafe space. This will be exapnded during Phase 2. Example:
// <GoBackHeader
//       label="Title Text"
//       backMethod="back"
//       headerState="stories"
//       onPress={() => handleBack()}
//     />
// <ScrollView style={styles.safeContainer}>{content}</ScrollView>

export const GoBackHeader = ({
  label,
  // backMethod,
  onPress,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={styles.unSafeContainer}>
        <View
          style={[
            styles.headerWrapper,
            {
              paddingTop: insets.top + 23,
            },
          ]}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            style={styles.actionButton}
            onPress={onPress}>
            <View style={styles.headerSubWrapper}>
              <BackArrow />
              {/*backMethod === 'back' ? <BackArrow /> : <CloseX />*/}
              <View style={styles.textWrapper}>
                <Typography style={styles.text} numberOfLines={1}>
                  {label}
                </Typography>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  unSafeContainer: {
    backgroundColor: COLORS.transparent,
  },
  headerWrapper: {
    borderBottomRightRadius: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  headerSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 49,
  },
  actionButton: {
    height: 40,
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    zIndex: 50,
  },
  text: {
    color: COLORS.primaryGray,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'left',
    fontWeight: '500',
  },
  textWrapper: {
    marginLeft: 10,
  },
});
