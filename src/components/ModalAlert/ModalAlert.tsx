import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import {COLORS} from '@theme/color';

import {Button, Typography} from '@components/index';

type Props = {
  primaryText: string;
  subText?: string;
  actionText?: string;
  cancelText?: string;
  canCancel?: boolean;
  onAction?: () => void;
  onCancel?: () => void;
  shouldHideCancel?: boolean;
};

export const ModalAlert = ({
  primaryText = 'Confirm',
  subText,
  actionText = 'Ok',
  cancelText = 'Cancel',
  canCancel = true,
  onAction = () => null,
  onCancel = () => null,
  shouldHideCancel = false,
}: Props) => (
  <>
    <View style={styles.innerOverlay}>
      <View style={styles.overlay} />
      <View style={styles.customAlertWrap}>
        <Typography style={styles.primaryText}>{primaryText}</Typography>
        {!!subText && subText.trim() && (
          <Typography style={styles.subText}>{subText}</Typography>
        )}
        <View style={styles.buttonsWrap}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={actionText}
            style={styles.actionButton}
            onPress={() => onAction && onAction()}>
            <Typography style={styles.actionText}>{actionText}</Typography>
          </TouchableOpacity>
          {canCancel && !shouldHideCancel && (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={cancelText}
              accessibilityHint="This is a cancel button"
              style={styles.cancelButton}
              onPress={() => onCancel && onCancel()}>
              <Typography style={styles.cancelText}>{cancelText}</Typography>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  customAlertWrap: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginHorizontal: 20,
    zIndex: 130,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  primaryText: {
    fontSize: 32,
    lineHeight: 36,
    textAlign: 'center',
    color: COLORS.secondaryGray,
  },
  subText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: COLORS.primaryGray,
    marginTop: 10,
  },
  buttonsWrap: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 25,
  },
  actionButton: {
    backgroundColor: COLORS.blue,
    marginHorizontal: 10,
    borderRadius: 12,
    minHeight: 44,
    justifyContent: 'center',
  },
  cancelButton: {
    borderRadius: 12,
    minHeight: 44,
    paddingVertical: 5,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginTop: 15,
  },
  actionText: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.white,
  },
  cancelText: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.black,
  },
  innerOverlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 130,
  },
  overlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: COLORS.black,
    opacity: 0.7,
  },
});
