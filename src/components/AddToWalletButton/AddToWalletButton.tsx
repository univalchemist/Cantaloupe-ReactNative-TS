import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {AddtoAppleWallet} from '@assets/icon';

interface AddToWalletButtonProps {
  onPress: () => void;
}

export const AddToWalletButton = ({onPress}: AddToWalletButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AddtoAppleWallet />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({button: {}});
