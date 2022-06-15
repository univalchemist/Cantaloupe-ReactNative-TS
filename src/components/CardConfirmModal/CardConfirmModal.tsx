import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View, ViewStyle, TouchableOpacity} from 'react-native';
import {COLORS} from '@theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CardRightArrow, HelpIcon} from '@assets/icon';
import {Typography} from '@components/Typography';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ConfirmCardDetail} from '../ConfirmCardDetail/ConfirmCardDetail';
import {Button} from '@components/Button/Button';
import {TermsAndConditionText} from '@components/TermsAndConditonText';

interface ICardConfrimModalProps {
  handleClose?: any;
  style?: ViewStyle;
  refRBSheet?: any;
  handleConfirm?: any;
  selectedBank?: any;
  handleNotYou?: () => void;
}

export const CardConfirmModal = ({
  style,
  handleClose,
  refRBSheet,
  handleConfirm,
  selectedBank,
  handleNotYou,
}: ICardConfrimModalProps) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <RBSheet
        ref={refRBSheet}
        // closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {},
          container: {
            height: hp('90%'),
            backgroundColor: COLORS.grayLight,
            borderRadius: 30,
          },
        }}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.innerContainer}>
              <CardRightArrow />
              <Typography>{' | '}</Typography>
              <CardRightArrow />
            </View>
            <View style={styles.innerContainer}>
              <CardRightArrow />
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <CardRightArrow />
              </TouchableOpacity>
            </View>
          </View>
          <Typography style={styles.reviewPayment}>
            Review your payment
          </Typography>
          <View style={styles.cardDetail}>
            <ConfirmCardDetail
              cardName={selectedBank?.cardName}
              cardNumber={selectedBank?.cardNumber}
              CardLogo={selectedBank?.CardLogo}
              onPressCard={() => {}}
            />
          </View>
          <Button
            onPress={handleConfirm}
            title="CONFIRM"
            style={styles.confirmBtn}
            titleStyle={styles.ConfirmTxt}
            leftIcon={null}
          />
          <View style={styles.notYouContainer}>
            <Typography style={styles.emailTxt}>
              I••••r@gmail.com{'  '}
            </Typography>
            <TouchableOpacity onPress={handleNotYou}>
              <Typography style={styles.notYouTxt}>Not You?</Typography>
            </TouchableOpacity>
          </View>

          <TermsAndConditionText />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('4%'),
    borderRadius: 20,
    overflow: 'hidden',
    paddingVertical: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewPayment: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  cardDetail: {
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
  },
  confirmBtn: {
    backgroundColor: COLORS.black,
    borderRadius: 40,
    minHeight: 50,
  },
  ConfirmTxt: {
    backgroundColor: COLORS.black,
    borderRadius: 40,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  notYouContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  emailTxt: {
    fontSize: hp('2%'),
    color: COLORS.darkGray,
  },
  notYouTxt: {
    fontSize: hp('2%'),
    color: COLORS.darkGray,
    textDecorationLine: 'underline',
  },
});
