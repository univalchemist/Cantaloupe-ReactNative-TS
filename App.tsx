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
 
 import {Provider} from 'react-redux';
 import MainNavigator from './src/navigation/MainNavigator';
 import {store} from './src/store/store';
 
 const App = () => {
   return (
     <Provider store={store}>
       <SafeAreaView style={{flex: 0, backgroundColor: '#ffe1cc'}} />
 
       <SafeAreaView style={[styles.Container]}>
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
 