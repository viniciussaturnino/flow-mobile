import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
