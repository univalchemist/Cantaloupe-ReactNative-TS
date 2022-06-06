/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {COLORS} from './src/theme/color';
import {BASE_URL} from './src/helpers/constants';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import {store} from './src/store/store';
import {LogBox} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

enableLatestRenderer();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaView style={{flex: 0, backgroundColor: '#ffe1cc'}} />
        {/*Look into possibly adding gradient view around safe area to remove above spacer */}
        <SafeAreaView style={[styles.Container]}>
          <MainNavigator />
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
