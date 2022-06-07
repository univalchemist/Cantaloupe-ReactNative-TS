import React, {useCallback} from 'react';
import {GoBackHeader} from '@components/GoBackHeader';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GradientScrollingWrapper} from '@components/GradientWrapper';

const Help = () => {
  const navigation = useNavigation();

  const backPressed = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <GradientScrollingWrapper style={styles.container}>
      <GoBackHeader
        headerState={'addCard'}
        label="HOME"
        onPress={() => backPressed()}
      />
      <View style={styles.faqContainer}>
        <Text style={styles.title}>FAQ</Text>
        <Text style={styles.questionText}>If I already have a MORE Loyalty Card, can I use my existing account to log in to the new App?</Text>
        <Text style={styles.answerText}>If you have an existing MORE Card & a Cantaloupe GetMORE.com account, you can use your existing credentials to log in to the new App. If you do not have a GetMORE.com account, you will have to create a new account within the new App.</Text>
        <Text style={styles.questionText}>How do I add funds to my MORE Account within the App?</Text>
        <Text style={styles.answerText}>Within the MORE App, you will click into the MORE Prepaid card icon, and you will have the option to manually add funds to your account or you can set up an “automatic reload” when your funds fall below a specific threshold. This feature can be turned on and off.</Text>
        <Text style={styles.questionText}>Can I track my purchases within the App?</Text>
        <Text style={styles.answerText}>Yes. There is a transactions section within the app that will keep track of your purchases and when funds are added to your account.</Text>
        <Text style={styles.questionText}>If I make an incorrect purchase or need a refund on my account, who do I contact?</Text>
        <Text style={styles.answerText}>Please find contact information for the machine operator on the specific machine to contact them for a refund on your account.</Text>
        <Text style={styles.questionText}>How do I add my Bakkt Card to my MORE Account?</Text>
        <Text style={styles.answerText}>Within the App there is an option, “Add Bakkt Card”, from there you will be directed to the Bakkt app, and you can link to your existing accounts with your Bakkt login, or you have the ability to create a brand-new account with Bakkt and then link your accounts.</Text>
      </View>
    </GradientScrollingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  faqContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    paddingBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 16,
  },
  answerText: {
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 24,
  },
});

export default Help;
