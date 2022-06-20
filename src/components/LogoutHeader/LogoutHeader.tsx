import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions, Alert, AsyncStorage} from 'react-native';
import {Typography} from '@components/index';
import {COLORS} from '@theme/color';
import {BackArrow} from '@assets/icon';
import {Logout} from '@assets/icon';
import {SignOut} from '@apollo-endpoints/index';
import {SignOutQuery} from '@models/SignOutQuery';
import {useNavigation} from '@react-navigation/native';

type Props = {
  label: string;
  //backMethod: 'back' | 'close';
  headerState: 'profile';
  onPress: () => void;
};

export const LogoutHeader = ({
  label,
  // backMethod,
  onPress,
}: Props) => {
  const navigation = useNavigation<LoginScreenProp>();

  const logOut = async () => {
    await SignOut().then((response: SignOutQuery) => {
      if(response?.success) {
        Alert.alert('Signed Out Sucessfully');
        AsyncStorage.setItem('token', '').then(() => {
          navigation.navigate('Welcome');
        });
      } else {
        console.warn("SignedOUT?", {response});
        // Do we want to do anything on bad api call?
      }
    });
  };

  return (
    <>
      <View style={styles.unSafeContainer}>
        <View style={styles.headerWrapper}>
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
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            style={styles.logoutButton}
            onPress={() => logOut()}
          >
            <Logout  style={styles.logout}/>
            <View style={styles.textWrapper}>
              <Typography style={styles.text} numberOfLines={1}>Sign Out</Typography>
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
    width: '90%',
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: 50,
  },
  headerWrapper: {
    justifyContent: 'center',
    marginLeft: 20,
    paddingTop: 40,
    paddingBottom: 20,
    width: 150,
  },
  headerSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 49,
  },
  actionButton: {
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 50,
    backgroundColor: COLORS.transparent,
  },
  logoutButton: {
    flexDirection: 'row',
    
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
  logout: {
    alignSelf: 'center',
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
    width: 160,
  },
});
