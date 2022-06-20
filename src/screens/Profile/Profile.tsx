import React, { useCallback, useState, useEffect } from 'react';
import { GoBackHeader } from '@components/GoBackHeader';
import { LogoutHeader } from '@components/LogoutHeader';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {COLORS} from '@theme/color';
import { GradientScrollingWrapper } from '@components/GradientWrapper';
import { FloatLabelTextField } from '@components/FloatLabelTextField';
import { ProfileTextField } from '@components/ProfileTextField';
import { Separator } from '@components/Separator';
import { Button } from '@components/Button';
import {getUser} from '@apollo-endpoints/index';
import {UserInfo} from '@models/UserInfo';
// import {Logout} from '@assets/icon/index';

const Profile = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await getUser().then((response: UserInfo) => {
      setUserInfo(response);
    });
  };

  const backPressed = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <GradientScrollingWrapper style={styles.container}>
      <LogoutHeader
        headerState={'profile'}
        label="HOME"
        onPress={() => backPressed()}
      />
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        <FloatLabelTextField
          title="Email*"
          startingValue={userInfo?.email || ' '}
          shouldPreventEdit={true}
          containerStyle={styles.inputContainer}
          titleStyle={styles.inputTitle}
          viewStyle={styles.inputContent}
        />
        <ProfileTextField
          title="Password"
          startingValue="•••••••••••••••"
          shouldPreventEdit={true}
          showChangeButton={true}
        />
        <Separator style={styles.separator} />
        <Text style={styles.subtitle}>Details</Text>
        <ProfileTextField
          title="First Name"
          startingValue={userInfo?.firstName || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="Last Name"
          startingValue={userInfo?.lastName || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="Mobile number"
          startingValue={userInfo?.mobile || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="Street address"
          startingValue={userInfo?.address1 || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="City"
          startingValue={userInfo?.city || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="State"
          startingValue={userInfo?.state || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <ProfileTextField
          title="ZIP / Postal Code"
          startingValue={userInfo?.postal || ' '}
          shouldPreventEdit={true}
        />
        <Separator style={styles.separator} />
        <Button
          title="Update Profile"
          onPress={() => Alert.alert('Update Profile functionality not yet released')}
          style={styles.button}
        />
      </View>
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  profileContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '300',
    paddingBottom: 20,
    paddingLeft: 15,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '300',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingTop: 5,
  },
  separator: {
    marginVertical: 5,
    marginBottom: 10,
    backgroundColor: COLORS.grayLight,
  },
  inputContainer: {
    width: '95%',
    backgroundColor: COLORS.white,
    shadowOpacity: 0,
  },
  clearContainer: {
    marginLeft: 10,
    minHeight: 60,
    backgroundColor: COLORS.transparent,
    marginBottom: 0,
  },
  inputTitle: {
    color: COLORS.primaryGray,
    backgroundColor: COLORS.transparent,
    fontSize: 16,
    lineHeight: 20,
    paddingTop: 4,
    fontWeight: '400',
  },
  inputContent: {
    fontSize: 20,
    lineHeight: 24,
    minWidth: "100%",
    width: '110%',
    paddingLeft: 31,
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 15,
    color: COLORS.primaryGray,
    fontWeight: '500',
    backgroundColor: COLORS.transparent,
  },
  clearContent: {
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 0,
    paddingHorizontal: 15,
    color: COLORS.orange,
    fontWeight: '500',
    backgroundColor: COLORS.transparent,
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
});

export default Profile;
