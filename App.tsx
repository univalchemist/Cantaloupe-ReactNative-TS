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
import {SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import {store} from './src/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.Container, backgroundStyle]}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
